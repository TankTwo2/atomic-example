import styles from "./HistoryTable.module.css";
import SearchDateBox from "../molecules/SearchDateBox";

export default function HistoryTable({ icon }: { icon?: string }) {
  return (
    <div>
      <div>
        <div className={styles.searchBox}>
          <SearchDateBox />
        </div>
      </div>
      <br />
      <table>
        <thead>
          <tr>
            <th colSpan={5}>The table header</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The table body</td>
            <td>with two columns</td>
            <td>with three columns</td>
            <td>with four columns</td>
            <td>with five columns</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
