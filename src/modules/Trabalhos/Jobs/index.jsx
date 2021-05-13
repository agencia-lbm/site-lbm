import React from 'react';

import { useFilter } from '../../../context/Filter.jsx';

import jobs from './jobs.json';

import styles from '../../../../styles/modules/Trabalhos/Jobs/Jobs.module.scss';

export default function Jobs() {
  const { services } = useFilter();

  return (
    <section className={styles.jobsWrapper}>
      <div className={styles.jobsItem}>
        {jobs.trabalhos.map((job) =>
          services === '' ? (
            <div key={job.id} className={styles.item}>
              <a href={job.link}>

                <img src={job.thumb} alt={job.cliente} />
              </a>
            </div>
          ) : null
        )}
      </div>
    </section>
  );
}
