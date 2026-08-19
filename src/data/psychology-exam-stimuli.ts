import { Question } from "./content";

type Stimulus = {
  text: string;
  source: string;
};

type StimulusSet = {
  stimulus: Stimulus;
  items: Array<Omit<Question, "id" | "stimulus">>;
};

const sets: StimulusSet[] = [
  {
    stimulus: {
      text: "A patient has the corpus callosum surgically severed to treat severe epilepsy. A picture of a key is flashed to the left visual field, so the information goes to the right hemisphere. The patient says they saw nothing, but the left hand can select a key from a group of objects hidden from view.",
      source: "Adapted from split-brain research in the tradition of Roger Sperry and Michael Gazzaniga",
    },
    items: [
      {
        question: "The patient cannot name the key primarily because",
        options: [
          "the right hemisphere typically lacks strong speech production",
          "the occipital lobe no longer processes vision",
          "the amygdala blocks language after surgery",
          "sensory neurons no longer reach the spinal cord"
        ],
        correctAnswer: "the right hemisphere typically lacks strong speech production",
        explanation: "In most people language is left-lateralized. A left-visual-field image reaches the right hemisphere and cannot cross to speech areas after the split.",
      },
      {
        question: "The left hand’s ability to select the key shows that the right hemisphere",
        options: [
          "still processed the image and can guide spatial/motor responses",
          "took over speech immediately after surgery",
          "cannot form any visual memories",
          "depends on the pituitary gland for object recognition"
        ],
        correctAnswer: "still processed the image and can guide spatial/motor responses",
        explanation: "The right hemisphere understood the image well enough to control the left hand, even though it could not produce the spoken name.",
      },
    ],
  },
  {
    stimulus: {
      text: "Researchers give participants a memory task in a scanner. Blood-oxygen levels rise in the hippocampus while people encode new word pairs, and later recall is better for pairs that produced stronger hippocampal activation.",
      source: "Hypothetical fMRI encoding study",
    },
    items: [
      {
        question: "This imaging method is most likely a(n)",
        options: ["EEG", "CT scan", "fMRI", "lesion study"],
        correctAnswer: "fMRI",
        explanation: "fMRI infers activity from blood-oxygen changes. EEG records electrical waves; CT shows structure with X-rays.",
      },
      {
        question: "The results most directly support the hippocampus’s role in",
        options: [
          "forming new explicit memories",
          "regulating heartbeat and breathing",
          "releasing cortisol during stress",
          "controlling voluntary muscle movement"
        ],
        correctAnswer: "forming new explicit memories",
        explanation: "Greater hippocampal activation during encoding predicted better later recall of the word pairs.",
      },
    ],
  },
  {
    stimulus: {
      text: "Participants watch a video of a car accident. Later, some are asked how fast the cars were going when they smashed into each other; others hear the verb hit. A week later, those who heard smashed are more likely to report seeing broken glass, even though none was in the video.",
      source: "Adapted from Loftus and Palmer, 1974",
    },
    items: [
      {
        question: "This finding is an example of the",
        options: ["spacing effect", "misinformation effect", "serial position effect", "next-in-line effect"],
        correctAnswer: "misinformation effect",
        explanation: "Misleading post-event wording altered later memory of the crash.",
      },
      {
        question: "The study most clearly challenges the idea that",
        options: [
          "eyewitness memory is a perfect recording of events",
          "encoding requires attention",
          "implicit memory is unconscious",
          "IQ scores are standardized"
        ],
        correctAnswer: "eyewitness memory is a perfect recording of events",
        explanation: "Memory was reconstructed and contaminated by later language, so it is not a flawless recording.",
      },
    ],
  },
  {
    stimulus: {
      text: "Infants are placed on a table with a visible drop covered by sturdy glass. Most babies who have begun crawling refuse to cross onto the glass, even when a caregiver encourages them from the other side.",
      source: "Adapted from Gibson and Walk’s visual cliff research",
    },
    items: [
      {
        question: "The visual cliff is designed to test",
        options: ["color constancy", "depth perception", "echoic memory", "fluid intelligence"],
        correctAnswer: "depth perception",
        explanation: "The apparatus asks whether infants perceive the apparent drop as three-dimensional and dangerous.",
      },
      {
        question: "Refusal to crawl onto the glass most likely depends on",
        options: [
          "binocular and monocular depth cues plus some motor experience",
          "semantic encoding of the caregiver’s words",
          "the Flynn effect",
          "anterograde amnesia"
        ],
        correctAnswer: "binocular and monocular depth cues plus some motor experience",
        explanation: "Crawling infants use depth cues to judge the drop; experience moving through space supports that judgment.",
      },
    ],
  },
  {
    stimulus: {
      text: "A researcher sounds a tone and then puffs air into a rabbit’s eye, causing a blink. After several pairings, the tone alone produces a blink. Later the tone is presented without the puff until blinking stops. The next day, the tone again produces a weak blink.",
      source: "Classical conditioning demonstration",
    },
    items: [
      {
        question: "After pairing, the tone functions as the",
        options: ["unconditioned stimulus", "conditioned stimulus", "unconditioned response", "reinforcer"],
        correctAnswer: "conditioned stimulus",
        explanation: "The previously neutral tone now elicits blinking because it predicted the air puff.",
      },
      {
        question: "The weak blink the next day illustrates",
        options: ["spontaneous recovery", "latent learning", "positive punishment", "habituation to the puff"],
        correctAnswer: "spontaneous recovery",
        explanation: "After extinction, a rest period can bring back a weakened conditioned response.",
      },
    ],
  },
  {
    stimulus: {
      text: "A toddler is left in a laboratory playroom. She explores while her caregiver sits nearby, becomes upset when the caregiver leaves, and is easily comforted at reunion, then returns to play.",
      source: "Adapted from Ainsworth’s Strange Situation",
    },
    items: [
      {
        question: "This pattern is best classified as",
        options: [
          "secure attachment",
          "insecure-avoidant attachment",
          "insecure-anxious attachment",
          "insecure-disorganized attachment"
        ],
        correctAnswer: "secure attachment",
        explanation: "Securely attached children use the caregiver as a safe base, show distress at separation, and calm at reunion.",
      },
      {
        question: "This attachment pattern is most often associated with caregivers who are",
        options: [
          "consistently responsive to the child’s needs",
          "strict, cold, and never comforting",
          "entirely uninvolved",
          "frightening or highly unpredictable"
        ],
        correctAnswer: "consistently responsive to the child’s needs",
        explanation: "Sensitive, reliable caregiving predicts secure attachment in the Strange Situation.",
      },
    ],
  },
  {
    stimulus: {
      text: "In a line-judgment task, six confederates unanimously give a clearly wrong answer. A real participant then gives the same wrong answer on several trials, later saying they did not want to look foolish, even though they knew the group was incorrect.",
      source: "Adapted from Asch’s conformity studies",
    },
    items: [
      {
        question: "The participant’s explanation is an example of",
        options: [
          "normative social influence",
          "informational social influence",
          "deindividuation",
          "the mere exposure effect"
        ],
        correctAnswer: "normative social influence",
        explanation: "They conformed to be liked or accepted, not because they thought the group had better information.",
      },
      {
        question: "Conformity in this procedure would most likely decrease if",
        options: [
          "even one confederate gave the correct answer",
          "the lines were made slightly longer",
          "the participant was promised extra credit",
          "the room was colder"
        ],
        correctAnswer: "even one confederate gave the correct answer",
        explanation: "Asch found that a single dissenter sharply reduced conformity.",
      },
    ],
  },
  {
    stimulus: {
      text: "An experimenter in a lab coat tells a volunteer to deliver increasingly strong shocks to a learner for wrong answers. The learner is actually a confederate and is not shocked, but protests and then falls silent. Many volunteers continue to the highest switch.",
      source: "Adapted from Milgram’s obedience research",
    },
    items: [
      {
        question: "Continuation to the highest shock primarily illustrates",
        options: ["obedience to authority", "groupthink", "social loafing", "the halo effect"],
        correctAnswer: "obedience to authority",
        explanation: "People followed the experimenter’s orders even when it conflicted with personal morals.",
      },
      {
        question: "Obedience in this situation would most likely fall if",
        options: [
          "the authority figure left the room or was replaced by an ordinary person",
          "the shocks were labeled with even larger numbers",
          "the volunteer had higher self-esteem",
          "the study used a bigger laboratory"
        ],
        correctAnswer: "the authority figure left the room or was replaced by an ordinary person",
        explanation: "Milgram found lower obedience when authority was distant or less legitimate.",
      },
    ],
  },
  {
    stimulus: {
      text: "Children watch an adult punch, kick, and yell at an inflatable doll. Later, in a room with the same doll, those children imitate the aggressive acts more than children who saw a calm adult. Children who saw the adult rewarded are especially likely to copy the behavior.",
      source: "Adapted from Bandura’s Bobo doll studies",
    },
    items: [
      {
        question: "The increased imitation after seeing the adult rewarded is",
        options: ["vicarious reinforcement", "classical extinction", "a fixed-interval schedule", "instinct"],
        correctAnswer: "vicarious reinforcement",
        explanation: "Observing a model receive a reward raises the chance of imitating that behavior.",
      },
      {
        question: "These results most strongly support",
        options: [
          "social-cognitive / observational learning theory",
          "the idea that aggression is only genetic",
          "drive-reduction as the sole cause of play",
          "humanistic self-actualization as the cause of hitting"
        ],
        correctAnswer: "social-cognitive / observational learning theory",
        explanation: "Children learned aggressive responses by watching a model, a core claim of observational learning.",
      },
    ],
  },
  {
    stimulus: {
      text: "College students who believed they had insulted another student were asked to do a dull peg-turning task. Those paid only $1 later rated the task as more enjoyable than those paid $20.",
      source: "Adapted from Festinger and Carlsmith, 1959",
    },
    items: [
      {
        question: "The $1 group’s attitude change is best explained by",
        options: ["cognitive dissonance", "the foot-in-the-door effect", "social loafing", "stereotype threat"],
        correctAnswer: "cognitive dissonance",
        explanation: "With little external justification for lying, they reduced discomfort by deciding the task really was interesting.",
      },
      {
        question: "The $20 group needed less attitude change because",
        options: [
          "the large payment provided sufficient external justification",
          "they had higher IQs",
          "the peg task became intrinsically fun after money",
          "they experienced deindividuation"
        ],
        correctAnswer: "the large payment provided sufficient external justification",
        explanation: "A big reward explained the lie, so they did not have to change their true attitude.",
      },
    ],
  },
  {
    stimulus: {
      text: "Dogs are placed in a harness and given inescapable shocks. Later, when they could jump a barrier to escape new shocks, many lie still and do not try. Dogs who could control the first shocks later escape easily.",
      source: "Adapted from Seligman’s learned helplessness research",
    },
    items: [
      {
        question: "The dogs that do not try to escape are showing",
        options: ["learned helplessness", "instinctive drift", "latent learning", "secure attachment"],
        correctAnswer: "learned helplessness",
        explanation: "Uncontrollable aversive events taught them that responses do not matter, so they stopped trying.",
      },
      {
        question: "This work is often used to help explain",
        options: [
          "why some people with depression stop trying to change outcomes",
          "why myelin speeds neural transmission",
          "why the WAIS has subtests",
          "why display rules differ by culture"
        ],
        correctAnswer: "why some people with depression stop trying to change outcomes",
        explanation: "Seligman linked perceived lack of control to passive, depression-like behavior.",
      },
    ],
  },
  {
    stimulus: {
      text: "A client with a spider phobia first learns deep relaxation. Then she looks at a photo of a spider, later views a spider in a jar across the room, and eventually stands near a spider while remaining relaxed.",
      source: "Exposure treatment vignette",
    },
    items: [
      {
        question: "This procedure is",
        options: ["systematic desensitization", "a token economy", "free association", "electroconvulsive therapy"],
        correctAnswer: "systematic desensitization",
        explanation: "Relaxation is paired with a gradually increasing fear hierarchy.",
      },
      {
        question: "The ranked list of feared situations is called a",
        options: ["fear hierarchy", "cognitive triad", "personality inventory", "projective test"],
        correctAnswer: "fear hierarchy",
        explanation: "Exposure therapies use a hierarchy from least to most frightening situations.",
      },
    ],
  },
];

export const psychologyExamStimulusQuestions: Question[] = sets.flatMap((set, setIndex) =>
  set.items.map((item, itemIndex) => ({
    id: `psych-exam-s${setIndex + 1}-q${itemIndex + 1}`,
    ...item,
    stimulus: set.stimulus,
  }))
);

export const psychologyExamStimulusSets = sets.map((set, setIndex) => ({
  stimulus: set.stimulus,
  questions: set.items.map((item, itemIndex) => ({
    id: `psych-exam-s${setIndex + 1}-q${itemIndex + 1}`,
    ...item,
    stimulus: set.stimulus,
  })),
}));
