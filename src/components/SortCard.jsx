import styled from "styled-components";
import { MyContext } from "../App";
import { useContext } from "react";

export default function SortCard({ isOpen, setIsOpen }) {
  const { dropdownMenuValue, setDropdownMenuValue } = useContext(MyContext);

  return (
    <>
      {isOpen ? (
        <DropdownContainer>
          <DropdownContent>
            <DropdownItem
              value="Most-Upvotes"
              onClick={() => {
                setDropdownMenuValue("Most-Upvotes");
                setIsOpen(false);
              }}
            >
              Most Upvotes
            </DropdownItem>
            <DropdownItem
              value="Least-Upvotes"
              onClick={() => {
                setDropdownMenuValue("Least-Upvotes");
                setIsOpen(false);
              }}
            >
              Least Upvotes
            </DropdownItem>
            <DropdownItem
              value="Most-Comments"
              onClick={() => {
                setDropdownMenuValue("Most-Comments");
                setIsOpen(false);
              }}
            >
              Most Comments
            </DropdownItem>
            <DropdownItem
              value="Least-Comments"
              onClick={() => {
                setDropdownMenuValue("Least-Comments");
                setIsOpen(false);
              }}
            >
              Least Comments
            </DropdownItem>
          </DropdownContent>
        </DropdownContainer>
      ) : null}
    </>
  );
}

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-top: 20px;
`;

const DropdownContent = styled.div`
  position: absolute;
  background-color: #fff;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
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
    color: #ad1fea;
  }
`;
