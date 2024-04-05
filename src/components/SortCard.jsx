import styled from "styled-components"

export default function SortCard({isOpen, dropdownMenuValue, setDropdownMenuValue}) {


    return (
        <>
        {isOpen ?
            <DropdownContainer>
                <DropdownContent >
                    <DropdownItem value="Most-Upvotes" onClick={() => setDropdownMenuValue("Most-Upvotes")}>Most Upvotes</DropdownItem>
                    <DropdownItem value="Least-Upvotes" onClick={() => setDropdownMenuValue("Least-Upvotes")}>Least Upvotes</DropdownItem>
                    <DropdownItem value="Most-Comments" onClick={() => setDropdownMenuValue("Most-Comments")}>Most Comments</DropdownItem>
                    <DropdownItem value="Least-Comments" onClick={() => setDropdownMenuValue("Least-Comments")}>Least Comments</DropdownItem>
                </DropdownContent>
            </DropdownContainer>
            : null}
      </>
    )
}


const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-top: 20px;
`;



const DropdownContent = styled.div`
  position: absolute;
  background-color: #fff;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border-radius: 10px;
  min-width: 250px;

  margin: 8px 24px;
  margin-left: 8px;

`;

const DropdownItem = styled.a`
    color: #647196;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  &:hover {
    color: #AD1FEA;
  }
`;