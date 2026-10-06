import { useState } from "react";

const CashMemo = ({ goBack }) => {
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(1);
  const [memos, setMemos] = useState([]);

  const [name, setName] = useState("Amit Electricals");
  const [place, setPlace] = useState("Gorakhpur, UP");
  const [mob, setMob] = useState("xxxxxxxxxx");

  const createRows = () => {
    let rows = [];
    for (let i = 1; i <= 20; i++) {
      rows.push(
        <tr key={i}>
          <td>{i}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>,
      );
    }
    return rows;
  };

  const createMemo = (num) => (
    <div className="sheet" key={num}>
      <div className="memo">
        {/* HEADER */}
        <div className="header">
          <div className="shop-name">{name}</div>
          <div className="sub">{place}</div>
          <div className="sub">मो: {mob}</div>
        </div>

        <div className="memo-title">कैश मेमो</div>

        <div className="row">
          <div>मेमो नं.: {String(num).padStart(3, "0")}</div>
          <div>दिनांक:______________ </div>
        </div>

        <div className="row">
          ग्राहक: ________________________________________ मो: ________________
        </div>

        {/* TABLE */}
        <div className="table-container">
          <table>
            <colgroup>
              <col style={{ width: "8%" }} /> {/* क्र. */}
              <col style={{ width: "52%" }} /> {/* विवरण (BIG) */}
              <col style={{ width: "10%" }} /> {/* मात्रा */}
              <col style={{ width: "13%" }} /> {/* दर */}
              <col style={{ width: "15%" }} /> {/* राशि */}
            </colgroup>
            <thead>
              <tr>
                <th>क्र.</th>
                <th>विवरण</th>
                <th>मात्रा</th>
                <th>दर</th>
                <th>राशि</th>
              </tr>
            </thead>

            <tbody>
              {createRows()}

              <tr>
                <td colSpan="5"></td>
              </tr>

              <tr>
                <td colSpan="3"></td>
                <td className="total-label">कुल</td>
                <td className="total-value"> </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* FOOTER */}
        <div className="footer">
          <div className="note">
            नोट: हमारे यहाँ पंखा, कूलर, फ्रिज की रिपेयरिंग की जाती है एवं घर के
            वायरिंग का सम्पूर्ण सामान उपलब्ध है
            <br />
            धन्यवाद!
          </div>
          <div className="sign">हस्ताक्षर</div>
        </div>
      </div>
    </div>
  );

  const generate = () => {
    const arr = [];
    for (let i = start; i <= end; i++) {
      arr.push(i);
    }
    setMemos(arr);
  };

  return (
    <div className="cash-memo-wrapper">
      {/* CONTROLS */}
      <div className="controls">
        <h2>Cash Memo Generator</h2>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Shop Name"
        />
        <input
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          placeholder="Place"
        />
        <input
          value={mob}
          onChange={(e) => setMob(e.target.value)}
          placeholder="Mobile"
        />

        <input
          type="number"
          value={start}
          onChange={(e) => setStart(+e.target.value)}
        />
        <input
          type="number"
          value={end}
          onChange={(e) => setEnd(+e.target.value)}
        />

        <button onClick={generate}>Generate</button>
        <button onClick={() => window.print()}>Print</button>
        <button onClick={goBack}>Back</button>
      </div>

      {/* MEMOS */}
      {memos.map((num) => createMemo(num))}
    </div>
  );
};

export default CashMemo;
