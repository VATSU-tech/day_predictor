import './page'
import { loader, resetBtn, result, select, startBtn, statusText, wordsText } from './dom';

const fakeStatuses = [
  "Connexion au réseau satellite NASA...",
  "Bypass des pare-feux orbitaux...",
  "Décryptage des flux temporels...",
  "Analyse des anomalies quantiques...",
  "Synchronisation des horloges atomiques...",
  "Extraction de la date cible...",
  "Transfer des donnees au client...",
  "Erreur lors du transfer des donnees...",
  "Transfer des donnees au client...",
  "Processus reussit.",
];

const fakeWords = [
  "ENCRYPTION_AES256",
  "QUANTUM_NODE",
  "TIME_VECTOR", 
  "ORBITAL_SYNC",
  "NEURAL_HASH",
  "TEMPORAL_KEY",
  "DEEP_SCAN",
  "SIGMA_PROTOCOL",
];



startBtn.addEventListener("click", () => {
  wordsText.textContent = ""
  select.classList.add("hidden");
  result.classList.add("hidden");
  resetBtn.classList.add("hidden");
  startBtn.classList.add("hidden");
  loader.classList.remove("hidden");

  document.querySelector<HTMLHeadingElement>('h1')!.textContent = "Prédiction en cours..."
  document.querySelector<HTMLParagraphElement>('.subtitle')!.textContent = "Patienter pendant la connexion au serveur..."

  let statusIndex = 0;
  let wordInterval = setInterval(() => {
    const randomWord = fakeWords[Math.floor(Math.random() * fakeWords.length)];
    wordsText.innerHTML += `<span>${randomWord}</span>`;
    // function afficherTableauLettreParLettre(
    //   elements: string[],
    //   container: HTMLElement,
    //   vitesse: number = 100,
    //   pauseEntreMots: number = 800
    // ): void {
    //   let indexMot = 0;
    //   let indexLettre = 0;

    //   container.textContent = "";

    //   function afficher(): void {
    //     if (indexMot >= elements.length) {
    //       return;
    //     }

    //     const motActuel = elements[indexMot];

    //     if (indexLettre < motActuel.length) {
    //       container.textContent += motActuel[indexLettre];
    //       indexLettre++;
    //       setTimeout(afficher, vitesse);
    //     } else {
    //       container.textContent += "\n";
    //       indexMot++;
    //       indexLettre = 0;
    //       setTimeout(afficher, pauseEntreMots);
    //     }
    //   }

    //   afficher();
    // }

    // afficherTableauLettreParLettre(fakeWords, wordsText);
  }, 300);

  let statusInterval = setInterval(() => {
    if (statusIndex < fakeStatuses.length) {
      statusText.textContent = fakeStatuses[statusIndex];
      statusIndex++;
    } else {
      clearInterval(statusInterval);
      clearInterval(wordInterval);
      showResult();
    }
  }, 1500);
});

function showResult() {
  select.classList.add("hidden");
  startBtn.classList.add("hidden");
  loader.classList.add("hidden");
  result.classList.remove("hidden");
  resetBtn.classList.remove("hidden");

  document.querySelector<HTMLHeadingElement>('h1')!.classList.add('hidden')
  document.querySelector<HTMLParagraphElement>('.subtitle')!.classList.add('hidden')

  const today = select.options[select.selectedIndex].text;
  const tomorrow =
    Number(select.value) === 6
      ? "Dimanche"
      : select.options[select.selectedIndex + 1].text;

  result.innerHTML = `
    <p>Jour selectionner : <strong>${today}</strong></p>
    <p>Jour suivant : <strong>${tomorrow}</strong></p>
    <p class="note">Prédiction validée par simulation temporelle.</p>
  `;
}

resetBtn.addEventListener("click", () => {
  select.classList.remove("hidden");
  startBtn.classList.remove("hidden");
  result.classList.add("hidden");
  resetBtn.classList.add("hidden");
  document.querySelector<HTMLHeadingElement>('h1')!.classList.remove('hidden')
  document.querySelector<HTMLParagraphElement>('.subtitle')!.classList.remove('hidden')
  document.querySelector<HTMLHeadingElement>('h1')!.textContent = "Predire de nouveau le jour suivant"
  document.querySelector<HTMLParagraphElement>('.subtitle')!.textContent = "Choisir le jour de reference"
}); 

select.selectedIndex = new Date().getDay()
// });
