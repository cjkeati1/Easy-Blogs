import React from 'react';
import PropTypes from 'prop-types';

const Profile = props => {
   return (
      <div className='columns'>
         <div className='container profile'>
            <div className='modal' id='edit-preferences-modal'>
               <div className='modal-background'/>
               <div className='modal-card'>
                  <header className='modal-card-head'>
                     <p className='modal-card-title'>Edit Profile</p>
                     <button className='delete'/>
                  </header>
                  <section className='modal-card-body'>
                     <label className='label'>Name</label>
                     <p className='control'>
                        <input className='input' placeholder='Text input' type='text'/>
                     </p>
                     <label className='label'>Username</label>
                     <p className='control has-icon has-icon-right'>
                        <input className='input' placeholder='Text input' type='text' value='pmillerk'/>
                     </p>
                     <label className='label'>Email</label>
                     <p className='control has-icon has-icon-right'>
                        <input className='input' placeholder='Email input' type='text' value='hello@'/>
                        <i className='fa fa-warning'/>
                        <span className='help is-danger'>This email is invalid</span>
                     </p>
                     <div className='control'>
                        <div className='control-label is-pulled-left'>
                           <label className='label'>Date of Birth</label>
                        </div>
                        <span>
              <span className='select'>
                <select>
                  <option>Month</option>
                  <option>With options</option>
                </select>
              </span>
              <span className='select'>
                <select>
                  <option>Day</option>
                  <option>With options</option>
                </select>
              </span>
              <span className='select'>
                <select>
                  <option>Year</option>
                  <option>With options</option>
                </select>
              </span>
            </span>
                     </div>
                     <label className='label'>Description</label>
                     <p className='control'>
                        <textarea className='textarea' placeholder='Describe Yourself!'/>
                     </p>
                     <div className='content'>
                        <h1>Optional Information</h1>
                     </div>
                     <label className='label'>Phone Number</label>
                     <p className='control has-icon has-icon-right'>
                        <input className='input' placeholder='Text input' type='text' value='+1 *** *** 0535'/>
                     </p>
                     <label className='label'>Work</label>
                     <p className='control has-icon has-icon-right'>
                        <input className='input' placeholder='Text input' type='text'
                               value='Greater Washington Publishing'/>
                     </p>
                     <label className='label'>School</label>
                     <p className='control has-icon has-icon-right'>
                        <input className='input' placeholder='Text input' type='text' value='George Mason University'/>
                     </p>
                  </section>
                  <footer className='modal-card-foot'>
                     <a className='button is-primary modal-save'>Save changes</a>
                     <a className='button modal-cancel'>Cancel</a>
                  </footer>
               </div>
            </div>
            <div className='section profile-heading'>
               <div className='columns is-mobile is-multiline'>
                  <div className='column is-2'>
          <span className='header-icon user-profile-image'>
            <img alt='' src='http://placehold.it/300x225'/>
          </span>
                  </div>
                  <div className='column is-4-tablet is-10-mobile name'>
                     <p>
                        <span className='title is-bold'>Paul Miller</span>
                        <br/>
                        <a className='button is-primary is-outlined' href='#' id='edit-preferences'
                           style={{margin: '5px 0'}}>
                           Edit Preferences
                        </a>
                        <br/>
                     </p>
                     <p className='tagline'>
                        {/*{bio}*/}
                     </p>
                  </div>
                  <div className='column is-2-tablet is-4-mobile has-text-centered'>
                     <p className='stat-val'>30</p>
                     <p className='stat-key'>searches</p>
                  </div>
                  <div className='column is-2-tablet is-4-mobile has-text-centered'>
                     <p className='stat-val'>10</p>
                     <p className='stat-key'>likes</p>
                  </div>
                  <div className='column is-2-tablet is-4-mobile has-text-centered'>
                     <p className='stat-val'>3</p>
                     <p className='stat-key'>lists</p>
                  </div>
               </div>

            </div>
         </div>
      </div>
   );
};

Profile.propTypes = {};

export default Profile;