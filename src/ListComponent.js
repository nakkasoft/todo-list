import React from 'react';
import './ListComponent.css';

const ListComponent = ({form, palette, children}) => {
    return(
        <main className="list-component">
            <div className="title">
                To Do List
            </div>
            <section className="palette-wrapper">
                {palette}
            </section>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    );
};

export default ListComponent;