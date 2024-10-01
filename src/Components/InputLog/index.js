import { InputLogContainer } from "./styles";

const InputLog = ({ value }) => {
    return (
        <InputLogContainer>
            <input disabled value = {value} />
        </InputLogContainer>
    );
};

export default InputLog;