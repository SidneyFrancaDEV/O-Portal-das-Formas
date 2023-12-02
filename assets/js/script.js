let shape = document.getElementById("shape");

let circle = `<h2>Círculo</h2>
<div class="shape-calculate">
    <img src="./assets/images/circulo.png" alt="Circulo">

    <form id="calc-form">
        <div>
            <label for="raioDoCirculo">Digite o Raio do círculo:</label>
            <input type="number" id="raioDoCirculo" required="" value="0">
        </div>

        <div>
            <button type="button" id="calcular-btn" onclick="calculateCircle()">Calcular Área</button>
        </div>

        <div>
            <label for="resultado">Área do círculo:</label>
            <span id="resultado">0.00</span>
        </div>
    </form>
</div>`;

let pyramid = `<h2>Tronco da Pirâmide</h2>
<div class="shape-calculate">
    <img src="./assets/images/piramide.png" alt="Tronco da Pirâmide">
    <form id="calc-form">
        <div>
            <label for="raioMaior">Digite o Raio Maior:</label>
            <input type="number" id="raioMaior" required value="0">
        </div>
        <div>
            <label for="raioMenor">Digite o Raio Menor:</label>
            <input type="number" id="raioMenor" required value="0">
        </div>
        <div>
            <label for="altura">Digite a Altura:</label>
            <input type="number" id="altura" required value="0">
        </div>
        <div>
            <button type="button" id="calcular-btn" onclick="calculatePyramid()">Calcular Área</button>
        </div>
        <div>
            <label for="resultado">Área do Tronco de Pirâmide:</label>
            <span id="resultado">0.00</span>
        </div></form></div>`;

let retangle = `<h2>Retângulo</h2>
<div class="shape-calculate">
    <img src="./assets/images/retangulo.png" alt="Circulo">

    <form id="calc-form">
        <div>
            <label for="ladoMenor">Digite o menor lado do rentângulo:</label>
            <input type="number" id="ladoMenor" required="" value="0">
        </div>

        <div>
            <label for="ladoMaior">Digite o maior lado do rentângulo:</label>
            <input type="number" id="ladoMaior" required="" value="0">
        </div>

        <div>
            <button type="button" id="calcular-btn" onclick="calculateRetangle()">Calcular Área</button>
        </div>

        <div>
            <label for="resultado">Área do Rentângulo:</label>
            <span id="resultado">0.00</span>
        </div>
    </form>
</div>`;

let annulus = `<h2>Coroa do Círculo</h2>
<div class="shape-calculate">
    <img src="./assets/images/coroadocirculo.png" alt="Circulo">

    <form id="calc-form">
        <div>
            <label for="raioMaior">Digite o Raio Maior:</label>
            <input type="number" id="raioMaior" required="" value="0">
        </div>

        <div>
            <label for="raioMenor">Digite o Raio Menor:</label>
            <input type="number" id="raioMenor" required="" value="0">
        </div>

        <div>
            <button type="button" id="calcular-btn" onclick="calculateAnnulus()">Calcular Área</button>
        </div>

        <div>
            <label for="resultado">Área da Coroa do Círculo:</label>
            <span id="resultado">0.00</span>
        </div>
    </form>
</div>`;

let trapezoid = `<h2>Tapezoide Irregular</h2>
<div class="shape-calculate">
    <img src="./assets/images/trapezoide.png" alt="Circulo">

    <form id="calc-form">
        <div>
            <label for="baseMaior">Digite a Base Maior:</label>
            <input type="number" id="baseMaior" required="" value="0">
        </div>

        <div>
            <label for="baseMenor">Digite a Base Menor:</label>
            <input type="number" id="baseMenor" required="" value="0">
        </div>
        
        <div>
            <label for="altura">Digite a Altura:</label>
            <input type="number" id="altura" required="" value="0">
        </div>

        <div>
            <button type="button" id="calcular-btn" onclick="calculateTrapezoid()">Calcular Área</button>
        </div>

        <div>
            <label for="resultado">Área do Tapezoide Irregular:</label>
            <span id="resultado">0.00</span>
        </div>
    </form>
</div>`;

let polygon = `<h2>Polígono Regular com N Lados</h2>
<div class="shape-calculate">
    <img src="./assets/images/poligono.png" alt="Circulo">

    <form id="calc-form">
        <div>
            <label for="lados">Digite a quantidade de Lados:</label>
            <input type="number" id="lados" required="" value="0">
        </div>

        <div>
            <label for="comprimentoLado">Digite o comprimento de cada Lado:</label>
            <input type="number" id="comprimentoLado" required="" value="0">
        </div>

        <div>
            <button type="button" id="calcular-btn" onclick="calculatePolygon()">Calcular Área</button>
        </div>

        <div>
            <label for="resultado">Área do Polígono Regular com N Lados:</label>
            <span id="resultado">0.00</span>
        </div>
    </form>
</div>
`;

let square = `<h2>Quadrado</h2>
<div class="shape-calculate">
    <img src="./assets/images/quadrado.png" alt="Circulo">

    <form id="calc-form">
        <div>
            <label for="medidaLado">Digite a Medida de um dos Lados do quadrado:</label>
            <input type="number" id="medidaLado" required="" value="0">
        </div>

        <div>
            <button type="button" id="calcular-btn" onclick="calculateSquare()">Calcular Área</button>
        </div>

        <div>
            <label for="resultado">Área do Quadrado:</label>
            <span id="resultado">0.00</span>
        </div>
    </form>
</div>`;

let sector = `<h2>Setor Circular em um Círculo Aninhado</h2>
<div class="shape-calculate">
    <img src="./assets/images/setor_circular.png" alt="Circulo">
    <form id="calc-form">
        <div>
            <label for="raioMaior">Digite o Raio Maior do Setor Circular:</label>
            <input type="number" id="raioMaior" required="" value="0">
        </div>

        <div>
            <label for="angulo">Digite o Ângulo do Setor Circular:</label>
            <input type="number" id="angulo" required="" value="0">
        </div>

        <div>
            <button type="button" id="calcular-btn" onclick="calculateSector()">Calcular Área</button>
        </div>

        <div>
            <label for="resultado">Área do Setor Circular em um Círculo Aninhado:</label>
            <span id="resultado">0.00</span>
        </div>
    </form>
</div>`;

document.getElementById("circle-button").addEventListener("click", () => {
  change(circle);
});

document.getElementById("pyramid-button").addEventListener("click", () => {
  change(pyramid);
});

document.getElementById("retangle-button").addEventListener("click", () => {
  change(retangle);
});

document.getElementById("annulus-button").addEventListener("click", () => {
  change(annulus);
});

document.getElementById("trapezoid-button").addEventListener("click", () => {
  change(trapezoid);
});

document.getElementById("polygon-button").addEventListener("click", () => {
  change(polygon);
});

document.getElementById("square-button").addEventListener("click", () => {
  change(square);
});

document.getElementById("sector-button").addEventListener("click", () => {
  change(sector);
});

function calculateCircle() {
  let raio_do_circulo = parseFloat(
    document.getElementById("raioDoCirculo").value
  );
  let area = Math.PI * Math.pow(raio_do_circulo, 2);
  document.getElementById("resultado").textContent = area.toFixed(2);
}

function calculatePyramid() {
  let raioMaior = parseFloat(document.getElementById("raioMaior").value);
  let raioMenor = parseFloat(document.getElementById("raioMenor").value);
  let altura = parseFloat(document.getElementById("altura").value);
  let area =
    Math.PI *
    (raioMaior + raioMenor) *
    (raioMaior -
      raioMenor +
      Math.sqrt(Math.pow(altura, 2) + Math.pow(raioMaior - raioMenor, 2)));
  document.getElementById("resultado").textContent = area.toFixed(2);
}

function calculateRetangle() {
  let lado_menor = parseFloat(document.getElementById("ladoMenor").value);
  let lado_maior = parseFloat(document.getElementById("ladoMaior").value);
  let area = lado_menor * lado_maior;
  document.getElementById("resultado").textContent = area.toFixed(2);
}

function calculateAnnulus() {
  let raio_maior = parseFloat(document.getElementById("raioMaior").value);
  let raio_menor = parseFloat(document.getElementById("raioMenor").value);
  let area = Math.PI * (Math.pow(raio_maior, 2) - Math.pow(raio_menor, 2));
  document.getElementById("resultado").textContent = area.toFixed(2);
}

function calculateTrapezoid() {
  let base_maior_trapezio = parseFloat(
    document.getElementById("baseMaior").value
  );
  let base_menor_trapezio = parseFloat(
    document.getElementById("baseMenor").value
  );
  let altura_do_trapezio = parseFloat(document.getElementById("altura").value);
  let area =
    ((base_maior_trapezio + base_menor_trapezio) * altura_do_trapezio) / 2;
  document.getElementById("resultado").textContent = area.toFixed(2);
}

function calculatePolygon() {
  let lados = parseFloat(document.getElementById("lados").value);
  let comprimento_lado = parseFloat(
    document.getElementById("comprimentoLado").value
  );

  let area =
    (lados * Math.pow(comprimento_lado, 2)) / (4 * Math.tan(Math.PI / lados));
  document.getElementById("resultado").textContent = area.toFixed(2);
}

function calculateSquare() {
  let medida_lado = parseFloat(document.getElementById("medidaLado").value);
  let area = Math.pow(medida_lado, 2);
  document.getElementById("resultado").textContent = area.toFixed(2);
}

function calculateSector() {
  let raio_maior = parseFloat(document.getElementById("raioMaior").value);
  let angulo = parseFloat(document.getElementById("angulo").value);
  let area = (angulo / 360) * Math.PI * Math.pow(raio_maior, 2);
  document.getElementById("resultado").textContent = area.toFixed(2);
}

function change(parameter) {
  shape.innerHTML = parameter;
}
