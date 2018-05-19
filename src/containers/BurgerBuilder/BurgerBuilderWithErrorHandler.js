import BurgerBuilder from './BurgerBuilder';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-order';

const burgerBuilderWithErrorHandler = withErrorHandler(BurgerBuilder, axios);

export default burgerBuilderWithErrorHandler;
