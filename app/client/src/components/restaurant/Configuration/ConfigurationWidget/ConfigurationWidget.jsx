import React, { useEffect, useRef } from 'react';
import { useUser } from '../../../../hooks/useUser';
import { useForm } from '../../../../hooks/useForm';
import { formValidations } from './formValidations';
import FormInput from '../../../FormInputs/FormInput';
import styles from '../configurationForm.module.scss';

const SuccessForm = (props) => {
    const { respForm, formState } = props;
    const { updateConfig } = useUser();

    console.log('**************** SUCCESS FORM ---> ', respForm);

    useEffect(() => {
        if (respForm?.status === 'OK') {
            updateConfig(formState);
        }
    }, []);

    return respForm?.status === 'OK' ? (
        <div className={styles.formSuccess}>Cambios guardados correctamente</div>
    ) : (
        <div className={styles.formError}>Ha habido un error al guardar los cambios</div>
    );
};

const MarkdownCodeBox = (props) => {
    const { code } = props;

    const codeBoxRef = useRef(null);

    const handleCopyToClipboard = (ev) => {
        ev.preventDefault();
        const codeBox = codeBoxRef.current;
        if (codeBox) {
            const range = document.createRange();
            range.selectNode(codeBox);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
            document.execCommand('copy');
            window.getSelection().removeAllRanges();
            alert('¡El código ha sido copiado al portapapeles!');
        }
    };

    return (
        <div className={styles.codeBox} ref={codeBoxRef}>
            <pre>
                <code>{code}</code>
            </pre>

            <button className={styles.copyButton} onClick={handleCopyToClipboard}>
                Copiar
            </button>
        </div>
    );
};

const ConfigurationWidget = () => {
    const { restaurantId, widgetCode, config } = useUser();

    const formData = {
        widgetDomains: config?.widgetDomains
    };
    const {
        formState,
        onInputChange,
        onSubmit,
        formSubmitted,
        checkedValidateFields,
        onResetForm,

        widgetDomains,

        isFormValid,
        widgetDomainsValid,

        responseForm,
        isLoadingForm,
        hasSendingError
    } = useForm(formData, formValidations, `/restaurant/${restaurantId}`, 'PUT');

    const code = `
    <div id="dgusta-widget-booking" data-restaurant="${widgetCode}"></div>
    
    <script type="module" crossorigin="anonymous" src="https://dgusta.netlify.app/widget/assets/index.dgusta.js"></script>
    <link rel="stylesheet" href="https://dgusta.netlify.app/widget/assets/index.dgusta.css" />
  `;

    return (
        <div className={styles.personalDataMainContainer}>
            {(responseForm || hasSendingError) && <SuccessForm respForm={responseForm} formState={formState} />}
            <h2>CONFIGURACIÓN DEL WIDGET</h2>
            <form className={styles.personalDataContainer} onSubmit={onSubmit}>
                <div className={styles.widgetRow}>
                    <div className={styles.rowWidgetForm}>
                        <FormInput
                            type='text'
                            placeholder='Dominio del widget'
                            name='widgetDomains'
                            value={widgetDomains}
                            onChange={onInputChange}
                            error={!!widgetDomainsValid && formSubmitted}
                            helperText={widgetDomainsValid}
                        />
                    </div>
                    <div className={styles.rowWidgetCode}>
                        <h3>Copia este codigo en tu pàgina web</h3>
                        <p>
                            Insertar este código en el <strong>body</strong> donde quieres que se muestre el widget, recuerda
                            ponerlo en el dominio que has incluido.
                        </p>
                        <MarkdownCodeBox code={code} />
                    </div>
                </div>

                <div className={styles.personalDataRow}>
                    <div className={styles.lastPersonalDataItem}>
                        <button type='submit'>Guardar cambios</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ConfigurationWidget;
