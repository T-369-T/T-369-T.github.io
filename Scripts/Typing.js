function Typing_Code() {
  new TypeIt(".Code", {
    speed: 100,
    afterComplete: async () => {
      $("#Typing").css({ "text-align": "left", margin: "auto" });
      hljs.highlightAll();
    },
  }).go();
}

function Typing() {
  new TypeIt(".Typing", {
    speed: 500,
    afterComplete: async () => {
      renderMathInElement(document.body);
    },
  }).go();
}

Typing_Code();
Typing();
