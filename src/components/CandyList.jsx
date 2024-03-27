import CandyPrintList from "./CandyListPrint"

const CandyList = ({ candyItem,onBuy }) => {
    return (
        <div className="">
            {candyItem.map((item) => (
                <CandyPrintList
                    candyName={item.name}
                    candyPrice={item.price}
                    candyDetail={item.detail}
                    onBuy={onBuy}
                />
            ))}
        </div>
    );
}

export default CandyList;
