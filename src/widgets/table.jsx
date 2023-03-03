export function Table(props) {
  const { headers, data } = props;
  return (
    <table className="w-full">
      <thead>
        <tr className="h-[76px]">
          { headers.map((val, index) => (
            <th key={"header" + index} className="p-1 border border-gray-200 h-[54px] text-[18px] items-center text-center font-bold text-white bg-[#497c7c]">
              { val }
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        { data.map((row, i) => (
          <tr key={"row" + i} className="h-[54px] items-center">
            { row.map((cell, j) => (
              <td key={"cell" + j} className="p-1 border border-[#808080] items-center font-medium text-center text-[16px]">
                { cell }
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}