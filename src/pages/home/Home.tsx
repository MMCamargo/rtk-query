import './styles/home.css';
import { usePostUserMutation, useGetAllUsersQuery } from '@/services/users';
import { IUser } from '@/models';
import { useState } from 'react';

function Home() {
	const [name, setName] = useState('');

	const [postUser] = usePostUserMutation();
	const { data } = useGetAllUsersQuery();

	return (
		<div className='container'>
			<div className='add-user-form'>
				<h2 className='user-form-title'>Cadastrar Usuário</h2>

				<input
					className='user-name-input'
					type='text'
					placeholder='Nome'
					value={name}
					onChange={({ target }) => setName(target.value)}
				/>

				<button className='add-user-btn' onClick={() => postUser(name)}>
					Salvar
				</button>
			</div>
			<div className='users-area'>
				{data &&
					data.data
						.map(({ uid, name }: IUser) => (
							<div className='user-box' key={uid}>
								<p>{'{'}</p>
								<p>
									uid: <span>{uid}</span>,
								</p>
								<p>
									name: <span>{name}</span>,
								</p>
								<p>{'}'}</p>
							</div>
						))
						.reverse()}
			</div>
		</div>
	);
}

export default Home;
