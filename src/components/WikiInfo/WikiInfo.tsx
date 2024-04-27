import React, { useEffect, useState } from 'react';
import { getWikiInfo } from '../../services/api';

interface WikiInfoProps {
  insectName: string;
}

const WikiInfo: React.FC<WikiInfoProps> = ({ insectName }) => {
  const [wikiInfo, setWikiInfo] = useState<string>('');

  useEffect(() => {
    const fetchWikiInfo = async () => {
      try {
        const info = await getWikiInfo(insectName);
        setWikiInfo(info);
      } catch (error) {
        console.error('Failed to fetch wiki info:', error);
      }
    };

    fetchWikiInfo();
  }, [insectName]);

  return (
    <div className="wiki-info">
      <h2>Wiki Info</h2>
      {wikiInfo ? (
        <div dangerouslySetInnerHTML={{ __html: wikiInfo }} />
      ) : (
        <p>Loading wiki info...</p>
      )}
    </div>
  );
};

export default WikiInfo;