"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Lock, Loader2, AlertCircle, Clock } from "lucide-react";
import { supabase } from "@/utils/supabase";
import { useAuth } from "@/context/AuthContext";
import { showError, showSuccess } from "@/utils/toast";
import { motion } from "framer-motion";

const Settings = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const [updatingProfile, setUpdatingProfile] = useState(false);
  const [updatingPassword, setUpdatingPassword] = useState(false);
  
  const [cooldownRemaining, setCooldownRemaining] = useState<string | null>(null);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/login");
      return;
    }

    if (user) {
      setFirstName(user.user_metadata?.first_name || "");
      setLastName(user.user_metadata?.last_name || "");
      setUsername(user.user_metadata?.username || "");
      checkUsernameCooldown();
    }
  }, [user, authLoading, navigate]);

  const checkUsernameCooldown = () => {
    if (!user?.user_metadata?.username_last_changed) return;

    const lastChanged = new Date(user.user_metadata.username_last_changed).getTime();
    const now = new Date().getTime();
    const threeDaysInMs = 3 * 24 * 60 * 60 * 1000;
    const diff = now - lastChanged;

    if (diff < threeDaysInMs) {
      const remaining = threeDaysInMs - diff;
      const days = Math.floor(remaining / (24 * 60 * 60 * 1000));
      const hours = Math.floor((remaining % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
      setCooldownRemaining(`${days}d ${hours}h`);
    } else {
      setCooldownRemaining(null);
    }
  };

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setUpdatingProfile(true);

    const updates: any = {
      first_name: firstName,
      last_name: lastName,
    };

    // Only update username if it changed and cooldown is over
    if (username !== user?.user_metadata?.username) {
      if (cooldownRemaining) {
        showError(`Username change is on cooldown. Wait ${cooldownRemaining}.`);
        setUpdatingProfile(false);
        return;
      }
      updates.username = username;
      updates.username_last_changed = new Date().toISOString();
    }

    const { error } = await supabase.auth.updateUser({
      data: updates
    });

    if (error) {
      showError(error.message);
    } else {
      showSuccess("Profile updated successfully");
      checkUsernameCooldown();
    }
    setUpdatingProfile(false);
  };

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      showError("Passwords do not match");
      return;
    }

    setUpdatingPassword(true);
    const { error } = await supabase.auth.updateUser({
      password: newPassword
    });

    if (error) {
      showError(error.message);
    } else {
      showSuccess("Password updated successfully");
      setNewPassword("");
      setConfirmPassword("");
    }
    setUpdatingPassword(false);
  };

  if (authLoading) return null;

  return (
    <Layout>
      <div className="max-w-2xl mx-auto space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Account Settings</h1>
          <p className="text-muted-foreground">Manage your profile information and security preferences.</p>
        </header>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-2 rounded-xl h-11 mb-8">
            <TabsTrigger value="profile" className="rounded-lg gap-2">
              <User size={16} /> Profile
            </TabsTrigger>
            <TabsTrigger value="security" className="rounded-lg gap-2">
              <Lock size={16} /> Security
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <Card className="border-border shadow-sm">
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your name and public username.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleUpdateProfile} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input 
                          id="firstName" 
                          value={firstName} 
                          onChange={(e) => setFirstName(e.target.value)}
                          className="rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input 
                          id="lastName" 
                          value={lastName} 
                          onChange={(e) => setLastName(e.target.value)}
                          className="rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        value={user?.email || ""} 
                        disabled 
                        className="rounded-xl bg-muted/50"
                      />
                      <p className="text-[10px] text-muted-foreground">Email cannot be changed.</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="username">Username</Label>
                        {cooldownRemaining && (
                          <span className="flex items-center gap-1 text-[10px] font-bold text-orange-500 uppercase tracking-wider">
                            <Clock size={12} />
                            Cooldown: {cooldownRemaining}
                          </span>
                        )}
                      </div>
                      <Input 
                        id="username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                        className={cn("rounded-xl", cooldownRemaining && "border-orange-200 bg-orange-50/30")}
                        placeholder="Choose a unique username"
                      />
                      <p className="text-[10px] text-muted-foreground">
                        Username changes have a 3-day cooldown period.
                      </p>
                    </div>

                    <Button type="submit" className="w-full rounded-xl h-11 font-semibold" disabled={updatingProfile}>
                      {updatingProfile ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Save Changes"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="security">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <Card className="border-border shadow-sm">
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>Change your password to keep your account secure.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleUpdatePassword} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input 
                        id="newPassword" 
                        type="password" 
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="rounded-xl"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm New Password</Label>
                      <Input 
                        id="confirmPassword" 
                        type="password" 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="rounded-xl"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full rounded-xl h-11 font-semibold" disabled={updatingPassword}>
                      {updatingPassword ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Update Password"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="mt-8 p-6 rounded-2xl bg-destructive/5 border border-destructive/10 flex gap-4 items-start">
                <AlertCircle className="text-destructive shrink-0 mt-1" size={20} />
                <div className="space-y-1">
                  <h3 className="font-bold text-destructive">Danger Zone</h3>
                  <p className="text-sm text-muted-foreground">
                    Deleting your account is permanent and cannot be undone. All your progress will be lost.
                  </p>
                  <Button variant="link" className="text-destructive p-0 h-auto font-bold hover:no-underline">
                    Delete Account
                  </Button>
                </div>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Settings;