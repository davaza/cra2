import React from 'react' // мы обязаны импортировать необходимые пакеты в каждом файле
import PropTypes from 'prop-types' // у Article это react и prop-types
import { Article } from './Article' // у Article это react и prop-types
class News extends React.Component {
    renderNews = () => {
        const { data } = this.props;
        let newsTemplate = null;
        if (data.length) {
            newsTemplate = data.map(function (item) {
                return <Article key={item.id} data={item} />;
            });
        } else {
            newsTemplate = <p>К сожалению новостей нет</p>;
        }
        return newsTemplate;
    };
    render() {
        const { data } = this.props;
        return (
            <div className="news">
                {this.renderNews()}
                {data.length ? (
                    <strong className={"news__count"}>
                        Всего новостей: {data.length}
                    </strong>
                ) : null}
            </div>
        );
    }
}

News.propTypes = {
    data: PropTypes.array.isRequired
};

export { News }