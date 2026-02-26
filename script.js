// Preço base Mercado Livre
const basePriceBR = 199.90;
const exchangeRate = 180; // Peso argentino (exemplo)

document.querySelectorAll('.br-price').forEach(el => {
  el.innerText = basePriceBR.toFixed(2);
});

document.querySelectorAll('.ar-price').forEach(el => {
  el.innerText = (basePriceBR * exchangeRate).toFixed(0);
});

function openML() {
  window.open("https://www.mercadolivre.com.br", "_blank");
}