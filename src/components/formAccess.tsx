import { SyntheticEvent, useState } from "react";
import { IUserData } from "../models/user";

export function FormAccess() {
    const user: IUserData = {
        name: "",
        lastName: "",
        birthDate: "",
        gender: "",
        email: "",
        wantsNews: false,
        username: "",
        password: "",
        accountType: "",
    };
    const [form, setForm] = useState(user);

    const handleForm = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        console.log("Input", element.name);
        setForm({ ...form, [element.name]: element.value });
    };

    return (
        <>
            <form onSubmit={handleForm}>
                <legend className="labels">Datos de Acceso</legend>
                <div>
                    <input
                        type="text"
                        name="username"
                        value={form.username}
                        onInput={handleForm}
                        placeholder="nombre de usuario"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onInput={handleForm}
                        placeholder="Crea una contraseña"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name="password_confirm"
                        value={form.password}
                        onInput={handleForm}
                        placeholder="Confirma tu contraseña"
                    />
                </div>

                <div>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onInput={handleForm}
                        placeholder="correo electrónico"
                    />
                </div>
                <div>
                    <input
                        type="checkbox"
                        name="news"
                        value={form.wantsNews ? "checked" : "unchecked"}
                        onChange={handleForm}
                        placeholder="¿Deseas recibir noticias y ofertas?"
                    />
                </div>

                <button type="submit">Enviar</button>
            </form>
            <div>
                <button className="next">Siguiente</button>
            </div>
        </>
    );
}
