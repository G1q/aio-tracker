import './Table.css'

const Table = ({ headers, children, search, filters }) => {
    return (
        <div className="table-wrapper">
            <div className="table-actions">
                {
                    search && (<search>
                        <input type="search" name="search" id="search" />
                    </search>)
                }
                {
                    filters && (<p>Filter component</p>)
                }
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