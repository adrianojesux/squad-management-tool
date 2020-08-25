import React, { useEffect, useState } from "react";
import { MdEdit, MdDelete, MdShare } from "react-icons/md";

import { Container } from "./styles";
import { Squad } from "../../interfaces/squad";
import colors from "../../styles/colors";

interface TableProps {
  squads: Array<Squad>;
}

const Table: React.FC<TableProps> = ({ squads }) => {
  const [squadList, setSquadList] = useState<Array<Squad>>([]);

  useEffect(() => {
    console.log(squads);
    if (squads) setSquadList(squads);
  }, [squads]);

  return (
    <Container>
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
      {squadList.length > 0 &&
        squadList.map((squad: Squad) => (
          <tr key={squad.name}>
            <td>{squad.name}</td>
            <td>
              <div className="content-table">
                {squad.description}
                <div className="actions">
                  <MdEdit color={colors.purple} />
                  <MdShare color={colors.purple} />
                  <MdDelete color={colors.purple} />
                </div>
              </div>
            </td>
          </tr>
        ))}
    </Container>
  );
};

export default Table;
