import { useParams } from "react-router";
import * as S from "./styles";

interface paramType {
  uuid: string;
}

const IntepretationDetail = () => {
  const { uuid } = useParams<paramType>();
  
    return (
        <div>
            
        </div>
    )
}

export default IntepretationDetail;
