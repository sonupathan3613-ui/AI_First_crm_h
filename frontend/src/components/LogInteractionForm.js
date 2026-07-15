import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addInteraction } from '../store/interactionSlice';

export default function LogInteractionForm() {
  const [hcpName, setHcpName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [interactionType, setInteractionType] = useState('');
  const [notes, setNotes] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addInteraction({ id: Date.now(), hcpName, specialty, interactionType, notes }));
  };

  return (
    <div>
      <h2>Log Interaction (Form)</h2>
      <input placeholder="HCP Name" value={hcpName} onChange={e => setHcpName(e.target.value)} />
      <input placeholder="Specialty" value={specialty} onChange={e => setSpecialty(e.target.value)} />
      <input placeholder="Interaction Type" value={interactionType} onChange={e => setInteractionType(e.target.value)} />
      <textarea placeholder="Notes" value={notes} onChange={e => setNotes(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
