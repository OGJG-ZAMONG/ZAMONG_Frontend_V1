import * as S from "./styles";
import { font } from "../../style/font";

interface PropsType {
  placeholder: string;
}

const TextEditor = ({ placeholder = "" }: PropsType): JSX.Element => {
  const isNumeric = (data: string): boolean => {
    return !isNaN(Number(data));
  };

  const setSelection = () => {
    //선택(드래그해서 끄는 선택, 보통의 경우 파란색으로 표시된다)되지 않았으면 커서가 있는 단어에 선택을 한다
    const selection = window.getSelection()!; //선택된 부분을 가져온다/
    const offset = selection.focusOffset; //그 줄의 커서 위치

    if (
      selection.focusNode?.textContent === null ||
      selection.focusNode?.textContent === undefined
    ) {
      //타입 확정을 위한 if 문
      return;
    }

    const text = selection.focusNode?.textContent; //커서의 줄의 텍스트

    //커서를 기준으로 양옆으로 자른다
    var left = text.slice(0, offset);
    var right = text.slice(offset, text.length);

    //양 옆에서 단어를 가져와서 왼쪽의 단어들의 맨 뒤 오른쪽 단의들의 맨 처음을 가져와 합치면 커서의 단어를 가져올 수 있다.
    const spaceCount = left.match(/ /g)?.length!; // 커서의 문자 시작 위치를 구하기위해 split으로 없애버린 공백의 개수를 가져온다.
    console.log(spaceCount);

    const leftWords = left.split(" ");
    const rightWords = right.split(" ");

    var startOffset = 0;

    for (var i = 0; i < leftWords.length - 1; ++i) {
      startOffset += leftWords[i].length;
    }
    startOffset += spaceCount; //커서의 단어의 시작 index

    left = leftWords[leftWords.length - 1];
    right = rightWords[0];

    //구한 문자열을 합친다.
    const word = left + right;

    const rng = selection.getRangeAt(0);

    //선택된 부분을 수정한다.
    rng.setStart(selection.focusNode, startOffset);
    rng.setEnd(selection.focusNode, startOffset + word.length);
  };

  const onHeadline1 = () => {
    const selection = window.getSelection()!;
    if (selection.isCollapsed) {
      //만약 선택(드래그해서 끄는 선택, 보통의 경우 파란색으로 표시된다) 되지 않았으면 커서의 단어에 선택이 되도록 한다.
      setSelection();
    }

    var selected = window.getSelection()!.getRangeAt(0);

    //b 태그 생성
    var node = document.createElement("headline1");
    node.style.font = font.headline1;
    //b 태그 내부에 선택영역의 text 넣기
    node.innerText = selected.toString();

    //선택영역을 지우고 생성한 b태그를 넣어 바꾸기
    selected.deleteContents();
    selected.insertNode(node);
  };

  const commandCallbacks = [onHeadline1];

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    //단축키를 관러하는 Handler
    if (e.ctrlKey && isNumeric(e.key)) {
      const commandKey = Number(e.key) - 1;

      if (commandKey < commandCallbacks.length) {
        commandCallbacks[commandKey](); //단축키에 해당하는 함수 부름
      }
    }
  };

  return (
    <>
      <S.Container
        contentEditable="true"
        placeholder={placeholder}
        onInput={(e) => {
          console.log(e.currentTarget.innerHTML);
        }}
        onKeyDown={onKeyDownHandler}
      ></S.Container>
    </>
  );
};

export default TextEditor;
