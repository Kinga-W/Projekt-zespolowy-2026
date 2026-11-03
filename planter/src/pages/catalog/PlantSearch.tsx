import useNames from '@/hooks/useNames';
import usePlants from '@/hooks/usePlants';
import { useState } from 'react'

interface PlantSearchProps {
  placeholder: string;
  keyword: string;
  setKeyword: (value: string) => void;
}

export default function PlantSearch({
  placeholder,
  keyword,
  setKeyword
}: PlantSearchProps) {

  return (
    <div className="searchbar">
      <input
        type="text"
        className="search"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}