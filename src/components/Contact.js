import email from '../img/contact-email.svg'
import phone from '../img/contact-phone.svg'
import address from '../img/contact-address.svg'

function Contact() {
    return (
      <div>

        <div className="contact-main-container">
            <div className="contact-main-header">
              <h1>Contact Us</h1>
              <span className="docs-content-header-subtext">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Quo mollitia tempore ducimus aliquam.</span>
            </div>

          <div className="contact-content-container">

            <div className="contact-direct-container">

              <div className="contact-direct-card">
                <div>
                  <img src={email} alt="Address" />
                </div>
                <div className="contact-direct-card-text">
                  <div>
                    <span className="contact-title">Email</span>
                  </div>
                  <div>
                    <span className="contact-info">support@newstack</span>
                  </div>
                </div>
              </div>

              <div className="contact-direct-card">
                <div>
                  <img src={phone} alt="Address" />
                </div>
                <div className="contact-direct-card-text">
                  <div>
                    <span className="contact-title">Phone</span>
                  </div>
                  <div>
                    <span className="contact-info">1-512-555-5555</span>
                  </div>
                </div>
              </div>

              <div className="contact-direct-card">
                <div>
                  <img src={address} alt="Address" />
                </div>
                <div className="contact-direct-card-text">
                  <div>
                    <span className="contact-title">Address</span>
                  </div>
                  <div>
                    <span className="contact-info">1234 Blueberry Circle
                    <br />
                    Austin, TX 78751</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="contact-form-container">
              <h1>Form</h1>
            </div>
          </div>

        </div>
      </div>
    );
  }
  
  export default Contact;
  