import { FormStyle } from "../styles/formStyle";
import { IconAccept, IconError, Modal, StatusTitle, StatusWrapper } from "../styles/statusStyle";

const Status = ({status}) => {

    const content = status === 'success' ? (
        <StatusWrapper>
            <IconAccept/>
            <StatusTitle>
                Ваша заявка отправлена
            </StatusTitle>
        </StatusWrapper>
    ) : ( 
        <StatusWrapper>
            <IconError/>
            <StatusTitle>
                Ошибка попробуйте позже
            </StatusTitle>
        </StatusWrapper>
    )

    return(
        <Modal>
            <FormStyle>
                {content}
            </FormStyle>
        </Modal>
    )
}

export default Status;