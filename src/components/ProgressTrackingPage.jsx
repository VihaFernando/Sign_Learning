import React from 'react';
import MainHeader from './MainHeader';
import ProfileInfo from './ProfileInfo';
import ProgressSection from './ProgressSection';
import './ProgressTrackingPage.css';
import Footer from './Footer';
import LessonDetails from './LessonDetails';

const ProgressTrackingPage = () => {
    return (
        <div class="progressPage">
            <div className="progress-tracking">
                <MainHeader />
                <div className="content">
                    <ProfileInfo />
                    <div className="progress-sections">
                        <ProgressSection title="Lessons" progress={75} />
                        <ProgressSection title="Games" progress={50} />
                        <ProgressSection title="Dictionary Usage" progress={90} />
                        <LessonDetails />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProgressTrackingPage;
