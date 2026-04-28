"use client";

import * as React from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toggleMute, getIsMuted } from "@/utils/sounds";

export function SoundToggle() {
  const [muted, setMuted] = React.useState(getIsMuted());

  const handleToggle = () => {
    const newState = toggleMute();
    setMuted(newState);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      className="rounded-full w-9 h-9 border border-border/50"
    >
      {muted ? (
        <VolumeX className="h-[1.2rem] w-[1.2rem] text-muted-foreground" />
      ) : (
        <Volume2 className="h-[1.2rem] w-[1.2rem] text-primary" />
      )}
      <span className="sr-only">Toggle sound</span>
    </Button>
  );
}