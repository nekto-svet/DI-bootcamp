import { useState, useEffect } from 'react';
import { format } from 'date-fns';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Date = (props) => {
  const [selected, setSelected] = useState(null);
  const {setDate} = props;

  useEffect(() => {
    if (selected) {
      setDate(format(selected, 'PP'));
    }
  }, [selected, setDate]);

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, 'PP')}.</p>;
  }


  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
    />
  );
 };

export default Date;