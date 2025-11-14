const generateBtn = document.getElementById('generate');
const output = document.getElementById('output');
const amountInput = document.getElementById('amount');
const typeSelect = document.getElementById('type');

const textData = [
  "I think of a lot of good ideas when going to the bathroom - I guess I have a real stream of consciousness.",
  "You say potato, I say starchy carbs.",
  "I once tried to start a hot sauce company. It burned out quickly.",
  "My dog has more followers than I do on social media. He’s a real influencer.",
  "If life gives you lemons, ask for salt and tequila.",
  "Coffee first, adulting second.",
  "Some days I amaze myself, other days I can’t find my phone while I’m holding it.",
  "I would agree with you but then we’d both be wrong.",
  "I’m not lazy, I’m on energy-saving mode.",
  "Sarcasm is my cardio."
];

generateBtn.addEventListener('click', () => {
  const amount = parseInt(amountInput.value);
  const type = typeSelect.value;
  let generatedText = '';

  if (type === 'words') {
    const words = textData.join(' ').split(' ');
    generatedText = words.slice(0, amount).join(' ');
  } 
  else if (type === 'sentences') {
    generatedText = textData.slice(0, amount).join('<br><br>');
  } 
  else if (type === 'paragraphs') {
    for (let i = 0; i < amount; i++) {
      const random = textData.sort(() => 0.5 - Math.random());
      generatedText += `<p>${random.slice(0, 3).join(' ')}</p>`;
    }
  }

  output.innerHTML = generatedText;
});
