import { contactsOperations } from 'redux/contacts';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { AiOutlineDelete } from 'react-icons/ai';

const ContactListItem = ({ id, number, name }) => {
  const dispatch = useDispatch();

  return (
    <li className=" list-none flex align-middle py-1" key={id}>
      <div>
        <button
          type="button"
          onClick={() => dispatch(contactsOperations.removeContacts(id))}
          className="p-1 bg-red-600 rounded mr-2 "
        >
          <AiOutlineDelete></AiOutlineDelete>
        </button>
      </div>
      {name}: {number}
    </li>
  );
};

ContactListItem.protoTypes = {
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  removeContact: PropTypes.func.isRequired,
};

export default ContactListItem;
