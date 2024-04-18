import __isEmpty from 'lodash/isEmpty';
import __isUndefined from 'lodash/isUndefined';
import clsx from 'clsx';
import styles from './stepsLine.module.scss';

const Step = (props) => {
    const { numStep, stepActive, setStepActive } = props;

    const styleStep = clsx({
        [styles.step]: true,
        [styles.active]: numStep === stepActive,
        [styles.prev]: numStep < stepActive
    });

    return <button className={styleStep} onClick={() => setStepActive(numStep)} />;
};

export default function StepsLine(props) {
    const { numSteps, stepActive, setStepActive } = props;

    const _getSteps = () => {
        return [...Array(numSteps)].map((e, currentStep) => {
            return <Step numStep={currentStep + 1} key={currentStep} stepActive={stepActive} setStepActive={setStepActive} />;
        });
    };

    if (stepActive <= 0) return <></>;

    return <div className={styles.stepLine}>{_getSteps()}</div>;
}
