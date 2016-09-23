var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = [text.replace(/markedsføring/gi, 'varm luft'),
              text.replace(/ways to connect/gi, 'ways to annoy each other'),
              text.replace(/has a work anniversary/gi, 'is stuck at a dead end job'),
              text.replace(/Kære netværk/gi, 'Hej, gør mig lige en gratis tjeneste.'),
              text.replace(/søger en praktikant/gi, 'søger en der vil arbejde 50 timer om ugen uden at få løn'),
              text.replace(/Try Premium for free/gi, 'We want to steal your money. FOR FREE!'),
              text.replace(/Recommended for you/gi, "Here is an ad you don't care about"),
							text.replace(/søger nye udfordringer/gi, "jeg kan ikke finde ud af noget som helst"),
							text.replace(/likes this/gi, "accidently liked this"),
							text.replace(/has a new job/gi, "is now a slave here")
            ];

            for (let i = 0; i < replacedText.length; i++) {
              if (replacedText[i] !== text) {
                  element.replaceChild(document.createTextNode(replacedText[i]), node);
              }
            }

        }
    }
}
