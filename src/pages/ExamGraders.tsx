import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  BookOpen, 
  CheckCircle2, 
  XCircle, 
  Info, 
  Download, 
  FileText,
  Scale,
  Target,
  Lightbulb
} from "lucide-react";
import { cn } from "@/lib/utils";

// DBQ Rubric data based on AP standards
const dbqRubricCriteria = [
  {
    category: "Thesis & Argument",
    points: 1,
    descriptors: [
      { score: 1, text: "Thesis is simplistic or missing; argument is unclear" },
      { score: 2, text: "Thesis presents a claim but lacks complexity or context" },
      { score: 3, text: "Thesis is historically defensible and responds to all parts of the question" },
      { score: 4, text: "Thesis is nuanced, historically defensible, and addresses complexity" }
    ]
  },
  {
    category: "Contextualization",
    points: 1,
    descriptors: [
      { score: 0, text: "No contextualization present" },
      { score: 1, text: "Limited contextualization; mentions period but not specifics" },
      { score: 2, text: "Adequate contextualization situating topic in broader historical framework" },
      { score: 3, text: "Sophisticated contextualization demonstrating deep understanding of era" }
    ]
  },
  {
    category: "Evidence & Document Analysis",
    points: 2,
    descriptors: [
      { score: 0, text: "No evidence used or evidence is completely irrelevant" },
      { score: 1, text: "Limited evidence; uses only 1-2 documents or misinterprets evidence" },
      { score: 2, text: "Uses multiple documents appropriately but may miss some evidence" },
      { score: 3, text: "Uses majority of documents effectively with strong analysis" },
      { score: 4, text: "Uses all documents effectively with sophisticated analysis and additional evidence" }
    ]
  },
  {
    category: "Complexity",
    points: 1,
    descriptors: [
      { score: 0, text: "No complexity demonstrated" },
      { score: 1, text: "Limited attempt at complexity (e.g., only one side of argument)" },
      { score: 2, text: "Attempts complexity with multiple perspectives or developments over time" },
      { score: 3, text: "Effectively addresses complexity with multiple nuanced perspectives" }
    ]
  },
  {
    category: "Sourcing",
    points: 1,
    descriptors: [
      { score: 0, text: "No sourcing or completely incorrect sourcing" },
      { score: 1, text: "Minimal sourcing; identifies author/purpose for 1-2 documents" },
      { score: 2, text: "Adequate sourcing for most documents; identifies author, audience, and context" },
      { score: 3, text: "Sophisticated sourcing; analyzes author perspective, audience, and historical context for all documents" }
    ]
  }
];

// LEQ Rubric data based on AP standards
const leqRubricCriteria = [
  {
    category: "Thesis & Argument",
    points: 1,
    descriptors: [
      { score: 1, text: "Thesis is simplistic, historically inaccurate, or missing entirely" },
      { score: 2, text: "Thesis presents a basic argument but lacks historical specificity or nuance" },
      { score: 3, text: "Thesis is historically defensible, addresses all parts of the prompt, and provides a roadmap for the essay" },
      { score: 4, text: "Thesis is complex, historically precise, and demonstrates sophisticated understanding of causation and change over time" }
    ]
  },
  {
    category: "Contextualization",
    points: 1,
    descriptors: [
      { score: 0, text: "No contextualization present" },
      { score: 1, text: "Minimal contextualization; general statement about time period" },
      { score: 2, text: "Adequate contextualization situating topic in broader historical developments" },
      { score: 3, text: "Sophisticated contextualization demonstrating deep understanding of relevant historical developments and their significance" }
    ]
  },
  {
    category: "Evidence & Development",
    points: 2,
    descriptors: [
      { score: 0, text: "No relevant evidence or evidence is completely incorrect" },
      { score: 1, text: "Limited evidence; uses only 1-2 examples or evidence is largely irrelevant" },
      { score: 2, text: "Uses multiple specific examples appropriately but may lack detailed development" },
      { score: 3, text: "Uses substantial relevant evidence with strong development and explanation" },
      { score: 4, text: "Uses extensive, specific, and relevant evidence with sophisticated development and analysis" }
    ]
  },
  {
    category: "Complexity",
    points: 1,
    descriptors: [
      { score: 0, text: "No complexity demonstrated" },
      { score: 1, text: "Limited complexity; one-sided argument or simple causation" },
      { score: 2, text: "Some complexity; acknowledges multiple perspectives or nuanced causation" },
      { score: 3, text: "Effectively addresses complexity with multiple layers of analysis" }
    ]
  },
  {
    category: "Sourcing & Evidence",
    points: 1,
    descriptors: [
      { score: 0, text: "No sourcing or completely incorrect sourcing" },
      { score: 1, text: "Minimal sourcing; identifies author/purpose for 1-2 pieces of evidence" },
      { score: 2, text: "Adequate sourcing; identifies author, audience, context for most evidence" },
      { score: 3, text: "Sophisticated sourcing; analyzes author perspective, audience, purpose, and historical context for all evidence" }
    ]
  }
];

// Sample student responses for demonstration
const sampleResponses = {
  dbq: {
    thesis: "Thesis presents a clear, historically defensible claim that addresses all parts of the question.",
    contextualization: "Demonstrates adequate contextualization by situating the topic within the broader historical framework of the period.",
    evidence: "Uses 3 out of 4 documents effectively with strong analysis, incorporating additional specific evidence to support the argument.",
    complexity: "Addresses complexity by considering multiple perspectives or developments over time.",
    sourcing: "Effectively sources all documents, analyzing author perspective, audience, and historical context."
  },
  leq: {
    thesis: "Thesis is historically defensible, addresses all parts of the prompt, and provides a roadmap for the argument.",
    contextualization: "Adequate contextualization situating the topic in broader historical developments.",
    evidence: "Uses multiple specific examples with strong development and explanation.",
    complexity: "Demonstrates some complexity by acknowledging multiple perspectives.",
    sourcing: "Adequate sourcing for most evidence, identifying author, audience, and context."
  }
};

const ExamGraders = () => {
  const [selectedExam, setSelectedExam] = useState<'dbq' | 'leq'>('dbq');
  const [showRubric, setShowRubric] = useState(false);

  const currentRubric = selectedExam === 'dbq' ? dbqRubricCriteria : leqRubricCriteria;
  const currentResponse = sampleResponses[selectedExam];

  const calculateScore = (responses: Record<string, string>) => {
    // Simplified scoring logic for demonstration
    const scores = {
      'Thesis & Argument': 3,
      'Contextualization': 2,
      'Evidence & Development': 3,
      'Complexity': 2,
      'Sourcing': 3
    };
    
    const totalPoints = Object.values(scores).reduce((a, b) => a + b, 0);
    const maxPoints = 6; // Total possible points
    return ((totalPoints / maxPoints) * 100).toFixed(1);
  };

  const currentScore = calculateScore(currentResponse);

  return (
    <Layout>
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText size={20} className="text-primary" />
              <h1 className="text-3xl font-bold tracking-tight">Exam Graders</h1>
            </div>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setShowRubric(!showRubric)}
                className="flex items-center gap-2"
              >
                <Info size={16} /> Rubric Guide
              </Button>
              <Button asChild size="sm" className="flex items-center gap-2">
                <Link to="/units/ap-world">
                  <BookOpen size={16} /> Back to Units
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedExam('dbq')}
              className={cn(
                "px-4 py-2 rounded-lg font-medium transition-colors",
                selectedExam === 'dbq'
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              Document-Based Question (DBQ)
            </button>
            <button
              onClick={() => setSelectedExam('leq')}
              className={cn(
                "px-4 py-2 rounded-lg font-medium transition-colors",
                selectedExam === 'leq'
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              Long Essay Question (LEQ)
            </button>
          </div>
        </header>

        {showRubric && (
          <div className="bg-muted/50 border border-primary/20 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              {selectedExam === 'dbq' ? <Target size={24} /> : <Scale size={24} />}
              {selectedExam === 'dbq' ? 'DBQ Rubric (10 points)' : 'LEQ Rubric (6 points)'}
            </h2>
            
            <div className="grid gap-4">
              {currentRubric.map((criterion, index) => (
                <div key={index} className="border border-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-lg">{criterion.category}</h3>
                    <span className="text-sm font-mono bg-muted px-2 py-1 rounded">
                      {criterion.points} pt{criterion.points > 1 ? 's' : ''}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    {criterion.descriptors.map((descriptor, descIndex) => (
                      <div
                        key={descIndex}
                        className={cn(
                          "p-3 rounded border transition-colors text-sm",
                          descriptor.score >= 3
                            ? "border-green-200 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300"
                            : "border-muted/50 bg-muted/50 text-muted-foreground"
                        )}
                      >
                        <span className="font-mono font-bold mr-2">{descriptor.score}</span>
                        {descriptor.text}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sample Response Analysis */}
        <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Lightbulb size={24} className="text-primary" />
            Sample Response Analysis
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Target size={20} />
                {selectedExam === 'dbq' ? 'DBQ Sample Response' : 'LEQ Sample Response'}
              </h3>
              
              <div className="bg-muted/50 rounded-xl p-4">
                <h4 className="font-semibold mb-2">Thesis</h4>
                <p className="text-sm leading-relaxed">{currentResponse.thesis}</p>
              </div>

              <div className="bg-muted/50 rounded-xl p-4">
                <h4 className="font-semibold mb-2">Contextualization</h4>
                <p className="text-sm leading-relaxed">{currentResponse.contextualization}</p>
              </div>

              <div className="bg-muted/50 rounded-xl p-4">
                <h4 className="font-semibold mb-2">Evidence & Development</h4>
                <p className="text-sm leading-relaxed">{currentResponse.evidence}</p>
              </div>

              <div className="bg-muted/50 rounded-xl p-4">
                <h4 className="font-semibold mb-2">Complexity</h4>
                <p className="text-sm leading-relaxed">{currentResponse.complexity}</p>
              </div>

              <div className="bg-muted/50 rounded-xl p-4">
                <h4 className="font-semibold mb-2">Sourcing</h4>
                <p className="text-sm leading-relaxed">{currentResponse.sourcing}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Scale size={20} />
                Overall Score: {currentScore}%
              </h3>
              
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-xs font-bold bg-primary text-primary-foreground">
                      Score
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-primary dark:text-primary-foreground">
                      {currentScore}/100
                    </span>
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div 
                    className="bg-primary h-2.5 rounded-full transition-all duration-500" 
                    style={{ width: `${currentScore}%` }}
                  ></div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-900/30">
                <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Grader Notes</h4>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                  <li>✓ Thesis clearly addresses all parts of the prompt</li>
                  <li>✓ Evidence is well-integrated and analyzed</li>
                  <li>✓ Demonstrates historical thinking skills</li>
                  <li>✓ Strong organization and development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Download Resources */}
        <div className="bg-muted/50 border border-primary/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Download size={24} className="text-primary" />
            Grading Resources
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              to="/assets/dbq_rubric_10.pdf"
              download="dbq_rubric_10.pdf"
              className="flex items-center justify-center gap-2 p-4 border border-border rounded-lg hover:border-primary/50 transition-colors"
            >
              <FileText size={20} />
              <span>DBQ Rubric (PDF)</span>
            </Link>
            
            <Link
              to="/assets/leq_rubric.pdf"
              download="leq_rubric.pdf"
              className="flex items-center justify-center gap-2 p-4 border border-border rounded-lg hover:border-primary/50 transition-colors"
            >
              <FileText size={20} />
              <span>LEQ Rubric (PDF)</span>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ExamGraders;