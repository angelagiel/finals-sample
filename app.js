let ws = new WebSocket('wss://stream.binance.com:9443/ws/etheur@trade');

let stockPriceElement = document.getElementById('coin__price')

let lastPrice = null;

ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    console.log(stockObject.p);

    let price = parseFloat(stockObject.p).toFixed(2)

    stockPriceElement.innerText = price;

    stockPriceElement.style.color = !lastPrice || lastPrice === price ? 'yellow' : price > lastPrice ? 'green': 'red';

    lastPrice = price; 
}