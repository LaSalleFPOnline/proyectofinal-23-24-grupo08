import FormWidget from './components/FormWidget';

export const DGustaWidgetApp = () => {
    return (
        <>
            <div className='bg-slate-200'>
                <h1>DGusta Widget</h1>
                <FormWidget />
                <FormWidget type='special' />
            </div>
        </>
    );
};
