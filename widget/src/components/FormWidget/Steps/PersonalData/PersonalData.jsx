import FormInput from '../../../FormInputs/FormInput';
import ResumeBooking from '../../ResumeBooking/ResumeBooking';
import styles from './personalData.module.scss';

const PersonalData = (props) => {
    const { onInputChange, fields, fieldsValid, formSubmitted, style } = props;
    const { name, email, phone, numPers, comments } = fields;
    const { nameValid, emailValid, phoneValid } = fieldsValid;

    return (
        <>
            <div className={styles.contentTitle}>
                <h2>Datos personales</h2>
            </div>

            <ResumeBooking />
            <div className={styles.contentText}>
                <p>Complete su reserva con sus datos personales</p>
            </div>
            <div className={`${styles.contentFieldForm} ${styles.labelFlex}`}>
                <div className={styles.labelBoxSmall}>Numero de personas</div>
                <FormInput type='number' name='numPers' value={numPers} style={style} onChange={onInputChange} max={10} />
            </div>
            <div className={styles.contentFieldForm}>
                <FormInput
                    type='text'
                    placeholder='nombre'
                    name='name'
                    value={name}
                    style={style}
                    onChange={onInputChange}
                    error={!!nameValid && formSubmitted}
                    helperText={nameValid}
                />
                <FormInput
                    type='email'
                    placeholder='Email'
                    name='email'
                    value={email}
                    style={style}
                    onChange={onInputChange}
                    error={!!emailValid && formSubmitted}
                    helperText={emailValid}
                />
                <FormInput
                    type='text'
                    placeholder='Telefono'
                    name='phone'
                    value={phone}
                    style={style}
                    onChange={onInputChange}
                    error={!!phoneValid && formSubmitted}
                    helperText={phoneValid}
                />
                <div className={styles.contentText}>
                    <p>Tenes algun tipo de alergia, intolerancia o comentario a hacer</p>
                    <FormInput
                        type='textarea'
                        placeholder='comentarios'
                        style={style}
                        name='comments'
                        value={comments}
                        onChange={onInputChange}
                    />
                </div>
            </div>
        </>
    );
};

export default PersonalData;
