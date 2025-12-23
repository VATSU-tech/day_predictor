export const root = document.querySelector<HTMLDivElement>('#root')!.innerHTML=`
      <div class="container">
        <h1>Predire le jour suivant</h1> 
        <p class="subtitle">Choisir le jour de reference</p>
        <div id="result" class="hidden"></div>
        <select name="day" id="select">
          <option value="0">Dimanche</option>
          <option value="1">Lundi</option>
          <option value="2">Mardi</option>
          <option value="3">Mercredi</option>
          <option value="4">Jeudi</option>
          <option value="5">Vendredi</option>
          <option value="6">Samedi</option>
        </select>
        <button id="startBtn">Lancer la prédiction</button>
        <button id="resetBtn" class="hidden">Reinitialiser</button>

        <div id="loader" class="hidden">
          <div class="spinner"></div>
          <p id="status">Initialisation des protocoles...</p>
          <p id="words"></p>
        </div>
      </div>
      <footer><a href="https://github.com/VATSU-tech/day_predictor.git" target="_blank" rel="noopenner"><i class="fa-brands fa-github"></i> VATSU-tech</a></footer>`