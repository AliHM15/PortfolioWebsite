import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

const projectsData = [
    {
      imgPath: require("../../Assets/Projects/chatify.png"),
      title: "Assignment Solver",
      description: "Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.",
      ghLink: "https://github.com/AliHM15",
      demoLink: "",
      technologies: "React.js, Material-UI, Firebase"
    },
    {
      imgPath: require("../../Assets/Projects/blog.png"),
      title: "Rock Paper Scissor Game",
      description: "My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown.",
      ghLink: "https://github.com/AliHM15",
      demoLink: "",
      technologies: "Next.js, Tailwind CSS"
    },
    {
      imgPath: require("../../Assets/Projects/codeEditor.png"),
      title: "Ecommerce Store",
      description: "Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage",
      ghLink: "https://github.com/AliHM15",
      demoLink: "",
      technologies: "React.js"
    },
    {
      imgPath: require("../../Assets/Projects/leaf.png"),
      title: "Multi-Omics Data Integration",
      description: "Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model.",
      ghLink: "https://github.com/AliHM15",
      demoLink: "",
      technologies: "PyTorch, CNN, Transfer Learning"
    },
    {
      imgPath: require("../../Assets/Projects/suicide.png"),
      title: "Mental Health Chat Bot",
      description: "Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention.",
      ghLink: "https://github.com/AliHM15",
      demoLink: "",
      technologies: "Natural Language Processing"
    },
    {
      imgPath: require("../../Assets/Projects/emotion.png"),
      title: "Face Recognition and Emotion Detection",
      description: "Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%. Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person.",
      ghLink: "https://github.com/AliHM15",
      demoLink: "",
      technologies: "Keras, TensorFlow, OpenCV"
    }
  ];
  
  export default projectsData;
  