const routerView = document.getElementById("router-view");

export function errorHandler() {
    routerView.innerHTML = `<section id="about">
                                        <div class="title-box">
                                            <h3>Refresh</h3>
                                            <hr/>
                                        </div>
                                        <p id="error-message">There seems to be an error, reload the page please.</p> 
                                        <footer>
                                            <span>© 2023 Creator of The Quotes Room</span>
                                        </footer>
                                    </section>`;
}