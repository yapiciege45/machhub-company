"use client";

export const RestaurantProductModalExtraComponent = ({
  selectedOptions,
  setSelectedOptions,
  extra,
  extraGroupLimit,
  extraGroupAmount,
  setExtraGroupAmount,
}) => {
  return (
    <div className="w-full flex justify-between items-center p-3">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => {
          const selectedOptionsAmount = selectedOptions.length;

          if (
            !(extraGroupLimit != 0 && selectedOptionsAmount >= extraGroupLimit)
          ) {
            if (selectedOptions.findIndex((y) => y.id == extra.id) == -1) {
              setSelectedOptions((prevState) => {
                let newArr = [...prevState];

                newArr.push({
                  id: extra.id,
                  amount: 1,
                });

                setExtraGroupAmount((prevState) => prevState + 1);

                return newArr;
              });
            } else {
              setSelectedOptions((prevState) => {
                let newArr = [...prevState];

                const deletedExtra = newArr.find((y) => y.id === extra.id);

                newArr = newArr.filter((y) => y.id !== extra.id);

                setExtraGroupAmount(
                  (prevState) => prevState - deletedExtra.amount,
                );

                return newArr;
              });
            }
          } else {
            if (selectedOptions.findIndex((y) => y.id == extra.id) != -1) {
              setSelectedOptions((prevState) => {
                let newArr = [...prevState];

                const deletedExtra = newArr.find((y) => y.id === extra.id);

                newArr = newArr.filter((y) => y.id !== extra.id);

                setExtraGroupAmount(
                  (prevState) => prevState - deletedExtra.amount,
                );

                return newArr;
              });
            }
          }
        }}
      >
        <div className="w-5 h-5 border rounded-full border-black p-0.5 cursor-pointer">
          {selectedOptions.findIndex((y) => y.id == extra.id) != -1 && (
            <div className="w-full h-full rounded-full bg-[#4c653f]"></div>
          )}
        </div>
        <p className="text-sm ml-3">{extra.name}</p>
      </div>
      <p className="text-sm font-bold">
        {extra.price == 0 ? <>FREE</> : <>+ {extra.price} kr.</>}
      </p>
    </div>
  );
};
