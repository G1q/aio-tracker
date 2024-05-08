import './Table.css'

const Table = ({ headers, children }) => {
    return (
        <div className="table-wrapper">
            <div className="table-actions">
                <search>
                    <input type="search" name="search" id="search" />
                </search>
                <p>Filter component</p>
            </div>

            <table>
                <thead>
                    <tr>
                        {
                            headers.map(header => <th key={header}>{header}</th>)
                        }
                    </tr>
                </thead>
                <tbody>{children}</tbody>
            </table>
        </div>
    )
}

export default Table