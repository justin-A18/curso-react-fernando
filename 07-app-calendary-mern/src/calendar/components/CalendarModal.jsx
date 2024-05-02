import { useEffect, useMemo, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { addHours, differenceInSeconds } from 'date-fns';
import Modal from 'react-modal';

import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from 'date-fns/locale/es';
import { useUiActions } from '../../hooks/useUiActions';
import { useCalendarActions } from '../../hooks/useCalendarActions';

registerLocale('es', es);

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};

Modal.setAppElement('#root');

const initialStateFormSubmitted = false;
const initialStateFormValues = {
	title: '',
	notes: '',
	start: new Date(),
	end: addHours(new Date(), 2),
};

export const CalendarModal = () => {
	const [formValues, setFormValues] = useState(initialStateFormValues);
	const [formSubmitted, setFormSubmitted] = useState(initialStateFormSubmitted);

	const { activeEvent, startSavingEvent } = useCalendarActions();
	const { isDateModalOpen, handleCloseDateClose } = useUiActions();

	const titleClass = useMemo(() => {
		if (!formSubmitted) return '';

		return formValues.title.length > 0 ? 'is-valid' : 'is-invalid';
	}, [formValues.title, formSubmitted]);

	useEffect(() => {
		if (activeEvent !== null) {
			setFormValues({ ...activeEvent });
		}
	}, [activeEvent]);

	const onInputChange = ({ target }) => {
		setFormValues({
			...formValues,
			[target.name]: target.value,
		});
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		setFormSubmitted(true);

		const difference = differenceInSeconds(formValues.end, formValues.start);

		if (isNaN(difference) || difference <= 0) {
			toast.error('Fechas incorrectas, revisar las fechas ingresadas', {
				theme: 'colored',
				delay: 500,
			});
			return;
		}

		if (formValues.title.length === 0) return;

		if (formValues.id) {
			toast.success(
				`Evento ${formValues.title} Se ha actualizado exitosamente`,
				{
					theme: 'colored',
					delay: 500,
				}
			);
		} else {
			toast.success('Se ha creado un nuevo evento exitosamente', {
				theme: 'colored',
				delay: 500,
			});
		}

		await startSavingEvent(formValues);
		handleCloseDateClose();
		setFormSubmitted(false);
	};

	const onDateChange = (event, changing) => {
		setFormValues({
			...formValues,
			[changing]: event,
		});
	};

	return (
		<>
			<Modal
				isOpen={isDateModalOpen}
				style={customStyles}
				onRequestClose={handleCloseDateClose}
				className='modal'
				overlayClassName='modal-fondo'
				closeTimeoutMS={200}>
				<h1> Nuevo evento </h1>
				<hr />
				<form
					className='container'
					onSubmit={onSubmit}>
					<div className='form-group mb-2 d-flex flex-column'>
						<label>Fecha y hora inicio</label>
						<DatePicker
							selected={formValues.start}
							onChange={(event) => onDateChange(event, 'start')}
							className='form-control'
							dateFormat='Pp'
							showTimeSelect
							locale='es'
							timeCaption='Hora'
						/>
					</div>

					<div className='form-group mb-2 d-flex flex-column'>
						<label>Fecha y hora fin</label>
						<DatePicker
							minDate={formValues.start}
							selected={formValues.end}
							onChange={(event) => onDateChange(event, 'end')}
							className='form-control'
							dateFormat='Pp'
							showTimeSelect
							locale='es'
							timeCaption='Hora'
						/>
					</div>

					<hr />
					<div className='form-group mb-2'>
						<label>Titulo y notas</label>
						<input
							type='text'
							className={`form-control ${titleClass}`}
							placeholder='Título del evento'
							name='title'
							autoComplete='off'
							onChange={onInputChange}
							value={formValues.title}
						/>
						<small
							id='emailHelp'
							className='form-text text-muted'>
							Una descripción corta
						</small>
					</div>

					<div className='form-group mb-2'>
						<textarea
							type='text'
							className='form-control'
							placeholder='Notas'
							rows='5'
							value={formValues.notes}
							onChange={onInputChange}
							name='notes'></textarea>
						<small
							id='emailHelp'
							className='form-text text-muted'>
							Información adicional
						</small>
					</div>

					<button
						type='submit'
						className='btn btn-outline-primary btn-block'>
						<i className='far fa-save'></i>
						<span> Guardar</span>
					</button>
				</form>
			</Modal>
			<ToastContainer />
		</>
	);
};
