import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormLabel, FormControl, FormDescription, FormGroup } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Timer } from "lucide-react";

const WorldGrader = () => {
  const navigate = useNavigate();

  const [dbqScore, setDbqScore] = useState("");
  const [leqScore, setLeqScore] = useState("");
  const [saq1Score, setSaq1Score] = useState("");
  const [saq2Score, setSaq2Score] = useState("");
  const [saq3Score, setSaq3Score] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = () => {
    const dbq = parseInt(dbqScore) || 0;
    const leq = parseInt(leqScore) || 0;
    const saq1 = parseInt(saq1Score) || 0;
    const saq2 = parseInt(saq2Score) || 0;
    const saq3 = parseInt(saq3Score) || 0;
    
    const total = dbq + leq + saq1 + saq2 + saq3;
    setResult(total);
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto space-y-8">
        <Card className="border-border shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">AP World History Grading Tool</CardTitle>
            <CardDescription>Enter scores for DBQ, LEQ, and SAQ to calculate your total raw score.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <FormGroup>
                <FormLabel htmlFor="dbq">DBQ (out of 7)</FormLabel>
                <FormControl
                  id="dbq"
                  type="number"
                  min="0"
                  max="7"
                  value={dbqScore}
                  onChange={(e) => setDbqScore(e.target.value)}
                  disabled={result !== null}
                />
                <FormDescription>Score between 0 and 7.</FormDescription>
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="leq">LEQ (out of 6)</FormLabel>
                <FormControl
                  id="leq"
                  type="number"
                  min="0"
                  max="6"
                  value={leqScore}
                  onChange={(e) => setLeqScore(e.target.value)}
                  disabled={result !== null}
                />
                <FormDescription>Score between 0 and 6.</FormDescription>
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="saq1">SAQ Part 1 (out of 3)</FormLabel>
                <FormControl
                  id="saq1"
                  type="number"
                  min="0"
                  max="3"
                  value={saq1Score}
                  onChange={(e) => setSaq1Score(e.target.value)}
                  disabled={result !== null}
                />
                <FormDescription>Score between 0 and 3.</FormDescription>
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="saq2">SAQ Part 2 (out of 3)</FormLabel>
                <FormControl
                  id="saq2"
                  type="number"
                  min="0"
                  max="3"
                  value={saq2Score}
                  onChange={(e) => setSaq2Score(e.target.value)}
                  disabled={result !== null}
                />
                <FormDescription>Score between 0 and 3.</FormDescription>
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="saq3">SAQ Part 3 (out of 3)</FormLabel>
                <FormControl
                  id="saq3"
                  type="number"
                  min="0"
                  max="3"
                  value={saq3Score}
                  onChange={(e) => setSaq3Score(e.target.value)}
                  disabled={result !== null}
                />
                <FormDescription>Score between 0 and 3.</FormDescription>
              </FormGroup>

              <Button
                type="button"
                onClick={handleSubmit}
                className="w-full rounded-xl bg-primary text-primary-foreground"
                disabled={result !== null}
              >
                {result !== null ? "Score Calculated" : "Calculate Total Score"}
              </Button>
            </form>

            {result !== null && (
              <div className="mt-6 p-4 rounded-2xl bg-primary/20 border border-primary">
                <div className="text-3xl font-bold text-primary mb-2">
                  Total Score: {result}/22
                </div>
                <div className="text-sm text-primary-foreground">
                  (DBQ: {dbqScore || 0}, LEQ: {leqScore || 0}, SAQ: {saq1Score || 0 + saq2Score || 0 + saq3Score || 0})
                </div>
              </div>
            )}

            <div className="flex gap-4">
              <Button                variant="outline"
                onClick={() => navigate("/units/ap-world")}
                className="flex-1 h-12 rounded-xl"
              >
                Back to Units
              </Button>
              <Button
                variant="ghost"
                onClick={() => navigate("/apush")}
                className="flex-1 h-12 rounded-xl"
              >
                APUSH Placeholder
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default WorldGrader;