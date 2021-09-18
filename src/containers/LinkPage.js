
import "../style/link_page.css"
import "../script/link_page"


export const LinkPage = (props) => {
    const data = props.data;
    //   console.log(data);
    return (
        <>
            <div id="link-page">
                <header>
                    <nav>
                        <div>
                            <h1>BTech 20</h1>
                        </div>
                        <div className="time">
                            <div id="time"></div>
                            <div id="date"></div>
                        </div>
                    </nav>
                </header>
                <section className="body">
                    <div className="color_code">
                        <h5 className="live">Running...</h5>
                        <h5 className="leftToday">Left</h5>
                        <h5 className="today_class">Todays Class</h5>
                        <h5 className="status">Not for Today</h5>
                    </div>
                    <h2>Semester 3</h2>

                    <h2 className="running">No Class is Running Now </h2>
                    <div className="card-container">
                        {
                            data.map((val, ind) => {
                                return (
                                    <CourseCard
                                        key={ind}
                                        data={val}
                                        class={"hide"}
                                    />
                                )
                            })
                        }
                    </div>

                    <h2 className="today">No Classes are Left Today</h2>
                    <div className="card-container">
                        {
                            data.map((val, ind) => {
                                return (
                                    <CourseCard
                                        key={ind}
                                        data={val}
                                        class={"hide2"}
                                    />
                                )
                            })
                        }
                    </div>

                    <h2>All Class Timing and Link</h2>
                    <div className="card-container">
                        {
                            data.map((val, ind) => {
                                return (
                                    <CourseCard
                                        key={ind}
                                        data={val}
                                        class={"course status"}
                                    />
                                )
                            })
                        }
                    </div>
                </section>
            </div>
        </>
    );
};

const CourseCard = (props) => {
    // console.log(props.data)
    return (<>
        <div className={props.class}>
            <h3>{props.data.course}</h3>
            {
                props.data.time.map((val, ind) => {
                    return (
                        <Timing
                            key={ind}
                            data={val}
                        />
                    )
                })
            }
        </div>
    </>)
}

const Timing = (props) => {
    // console.log(props.data)
    return (
        <>
            <h4 className="time">{props.data.time}</h4>
            {
                props.data.section.map((val, ind) => {
                    return (
                        <ClassLink
                            key={ind}
                            data={val}
                        />
                    )
                })
            }
        </>
    )
}

const ClassLink = (props) => {
    // console.log(props.data)
    return (<>
        <h5>
            <a href={props.data.link} target="blank">{props.data.section}</a>
        </h5>
    </>)
}
