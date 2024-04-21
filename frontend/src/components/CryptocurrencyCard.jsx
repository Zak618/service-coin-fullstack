import { Card } from "antd";

function CryptocurrencyCard(props) {

  const { currency } = props

  if (!currency) {
    return <div>Загрузка данных...</div>;
  }

  const price = Math.round(currency.quote.USD.price)

  return (
    <>
      <Card
        title={
          <div className="flex items-center gap-3">
            <img className="w-10 h-10" src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${currency.id}.png`} />
            <span className="text-blue-600 text-xl">{currency.name}</span>
          </div>
        }
        style={{
          width: 300,
        }}
      >
        <p className="text-xl">Цена: {price}</p>
      </Card>
    </>
  );
}

export default CryptocurrencyCard;
