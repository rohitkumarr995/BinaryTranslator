import React, { useCallback, useEffect, useRef, useState } from "react";
import DestDropdown from "./DestDropdown";
import {
  ASCIIToBinary,
  ASCIIToText,
  binaryToDecimal,
  binaryToHex,
  binaryToText,
  decimalToBinary,
  decimalToHex,
  hexToBinary,
  hexToDecimal,
  textToASCII,
  textToBinary,
  textToHex,
} from "../utils/Converters";
import "../stylesheets/DataInbox.css";
import '../media/DataInbox.css'
import { Copy } from "lucide-react";
import { RotateCcw } from "lucide-react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import Introduction from "./Introduction";

export default function DataInbox() {
  const [option, setOption] = useState("Decimal");
  const [sourceText, setSourceText] = useState("");
  const [destText, setDestText] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const convertedValRef = useRef(null);

  useEffect(()=>{
    document.title = "Binary Calculator"
  },[])

  const selectOption = (event) => {
    setOption(event.target.value);
  };

  const handleDataFromChild = (data) => {
    setSelectedOption(data);
  };

  const covert = () => {
    if (sourceText !== "") {
      if(selectedOption!=="" && selectedOption!=="Select"){
        if (option == "Text" && selectedOption == "Binary") {
          let textToBin = textToBinary(sourceText);
          setDestText(textToBin);
        } else if (option == "Binary" && selectedOption == "Text") {
          let binToText = binaryToText(sourceText);
          setDestText(binToText);
        } else if (option == "Binary" && selectedOption == "Hex") {
          let binToHex = binaryToHex(sourceText);
          setDestText(binToHex);
        } else if (option == "Binary" && selectedOption == "Decimal") {
          let binToDec = binaryToDecimal(sourceText);
          setDestText(binToDec);
        } else if (option == "Text" && selectedOption == "Hex") {
          let txtToHex = textToHex(sourceText);
          setDestText(txtToHex);
        } else if (option == "Text" && selectedOption == "ASCII") {
          let txtToASCII = textToASCII(sourceText);
          setDestText(txtToASCII);
        } else if (option == "Decimal" && selectedOption == "Binary") {
          let decToBin = decimalToBinary(sourceText);
          setDestText(decToBin);
        } else if (option == "Decimal" && selectedOption == "Hex") {
          let decToHex = decimalToHex(sourceText);
          setDestText(decToHex);
        } else if (option == "Hex" && selectedOption == "Decimal") {
          let hexToDec = hexToDecimal(sourceText);
          setDestText(hexToDec);
        } else if (option == "Hex" && selectedOption == "Binary") {
          let hexToBin = hexToBinary(sourceText);
          setDestText(hexToBin);
        } else if (option == "ASCII" && selectedOption == "Binary") {
          let ASCIIToBin = ASCIIToBinary(sourceText);
          setDestText(ASCIIToBin);
        } else if (option == "ASCII" && selectedOption == "Text") {
          let ASCIIToTxt = ASCIIToText(sourceText);
          setDestText(ASCIIToTxt);
        }
      }else{
        alert("Attention! Please select an option.");
      }    
    } else {
      alert("Attention! Please provide input in the field.");
    }
  };

  const handleTextArea =(event) => {
    setSourceText(event.target.value);
  };

  const newConversion = () => {
    window.location.reload();
  };

  const copyConvertedValues = useCallback(() => {
    convertedValRef.current?.select();
    window.navigator.clipboard.writeText(destText);
  }, [destText]);

  const clearContent = () =>{
    setSourceText("")
    setDestText("")
  }

  return (
    <>
      <div className="main-container">
        <Introduction />
        <hr />
        <div className="actions-filed-container">
          <header className="main-header">
            <div className="dropdown-1">
              <select
                name="from-converter"
                id="dropdown-source"
                value={option}
                onChange={selectOption}
                className="src-dropdown-1"
              >
                <option value="Decimal">Decimal</option>
                <option value="Binary">Binary</option>
                <option value="Hex">Hex</option>
                <option value="Text">Text</option>
                <option value="ASCII">ASCII</option>
              </select>
            </div>

            <div className="conjunction">To</div>

            <DestDropdown
              option={option}
              handleDataFromChild={handleDataFromChild}
            />
          </header>

          <section className="main-section">
            <div className="input-textarea">
              <textarea
                name="textarea"
                id="source-textarea"
                value={sourceText}
                onChange={handleTextArea}
                style={{ resize: "none" }}
              />
            </div>

            <div className="output-textarea">
              <textarea
                name="texarea"
                id="destination-textarea"
                value={destText}
                readOnly
                style={{ resize: "none" }}
                ref={convertedValRef}
              />
            </div>
          </section>

          <footer className="main-footer-1">
            <div className="left-btn-actions">
              <Stack direction="row" spacing={2}>
                <Button
                  id="btn-clear"
                  variant="contained"
                  startIcon={<DeleteIcon />}
                  color="error"
                  onClick={clearContent}
                >
                  <strong>Clear</strong>
                </Button>
              </Stack>
            </div>
            <div className="right-btn-actions">
              <Stack direction="row" spacing={2}>
                <Button
                  id="btn-convert"
                  variant="contained"
                  endIcon={<SendIcon />}
                  color="success"
                  onClick={covert}
                >
                  <strong>Convert</strong>
                </Button>
              </Stack>
            </div>
          </footer>

          <footer className="main-footer-2">
            <div className="center-btn-actions">
              <Button
                id="btn-copy"
                variant="contained"
                onClick={copyConvertedValues}
              >
                <div>
                  <Copy />
                </div>
                <div id="lbl-copy">
                  <strong>Copy</strong>
                </div>
              </Button>
              <Button
                id="btn-new-conversion"
                variant="contained"
                onClick={newConversion}
              >
                <div>
                  <RotateCcw />
                </div>
                <div id="lbl-conversion">
                  <strong>New Conversion</strong>
                </div>
              </Button>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
