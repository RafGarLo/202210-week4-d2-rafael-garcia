import { SyntheticEvent, useState } from "react";
import { IUserData } from "../models/user";

export function FormPersonal() {
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
                <legend className="labels">Formulario</legend>
                <div>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onInput={handleForm}
                        placeholder="nombre"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onInput={handleForm}
                        placeholder="Dime tu apellido"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="birthDate"
                        value={form.birthDate}
                        onInput={handleForm}
                        placeholder="Fecha de nacimiento"
                    />
                </div>
                <div>
                    <fieldset className="labels">
                        <label>Marca tu género</label>
                        <br></br>
                        <label>
                            Varon
                            <input
                                type="radio"
                                name="Gender"
                                value="Hombre"
                                onInput={handleForm}
                            />
                        </label>
                        <label>
                            Mujer
                            <input
                                type="radio"
                                name="Gender"
                                value="Hombre"
                                onInput={handleForm}
                            />
                        </label>
                        <label>
                            Otro
                            <input
                                type="radio"
                                name="Gender"
                                value="Hombre"
                                onInput={handleForm}
                            />
                        </label>
                    </fieldset>
                </div>

                <button type="submit">Enviar</button>
            </form>
            <div>
                <button className="next">Siguiente</button>
            </div>
        </>
    );
}