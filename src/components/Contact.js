import React, { useState, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_geko8bk';
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_iw0zm08';
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '-3LXg3a6UqvysfV2P';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const [mapLoading, setMapLoading] = useState(true);
  const [markerIcon, setMarkerIcon] = useState(null);
  const [mapError, setMapError] = useState(null);

  const mapContainerStyle = {
    width: '100%',
    height: '300px',
    borderRadius: '8px'
  };

  // TODO: Replace these with your actual location coordinates
  // You can find your coordinates by:
  // 1. Going to Google Maps
  // 2. Right-clicking on your location
  // 3. The coordinates will appear at the top of the menu
  const center = {
    lat: 47.6039,
    lng: -122.3321
  };

  // Google Maps API key from environment variables
  const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const staticMapUrl = `https://staticmap.openstreetmap.de/staticmap.php?center=${center.lat},${center.lng}&zoom=13&size=600x300&markers=${center.lat},${center.lng},lightblue1`;

  const mapStyles = [
    {
      featureType: "all",
      elementType: "labels.text.fill",
      stylers: [{ color: "#7c93a3" }, { lightness: "-10" }]
    },
    {
      featureType: "administrative",
      elementType: "labels.text.fill",
      stylers: [{ color: "#444444" }]
    },
    {
      featureType: "landscape",
      elementType: "all",
      stylers: [{ color: "#f2f2f2" }]
    },
    {
      featureType: "poi",
      elementType: "all",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "road",
      elementType: "all",
      stylers: [{ saturation: -100 }, { lightness: 45 }]
    },
    {
      featureType: "road.highway",
      elementType: "all",
      stylers: [{ visibility: "simplified" }]
    },
    {
      featureType: "road.arterial",
      elementType: "labels.icon",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "transit",
      elementType: "all",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "water",
      elementType: "all",
      stylers: [{ color: "#007bff" }, { visibility: "on" }]
    }
  ];

  const mapOptions = {
    disableDefaultUI: true,
    zoomControl: true,
    styles: mapStyles,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    gestureHandling: "cooperative"
  };

  const onMapLoad = useCallback(() => {
    setMapLoading(false);
    if (window.google) {
      setMarkerIcon({
        url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
        scaledSize: new window.google.maps.Size(40, 40)
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Email service is not configured. Please try again later.'
      });
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      const reason = error?.text || error?.message || 'Failed to send message. Please try again.';
      setStatus({ submitting: false, submitted: false, error: reason });
      // Log to console for debugging without exposing stack to users
      // eslint-disable-next-line no-console
      console.error('EmailJS send failed', error);
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Feel free to reach out to me for any questions or opportunities!</p>
          <div className="contact-details">
            <p>📧 Email: yemeerma11@gmail.com</p>
            <p>📱 Phone: 206-487-9678</p>
            <p>📍 Location: Seattle, WA</p>
          </div>
          
          <div className="map-container">
            {mapLoading && (
              <div className="map-loading">
                <div className="loading-spinner"></div>
                <p>Loading map...</p>
              </div>
            )}
            {mapError && (
              <div className="error-message">
                {mapError}
              </div>
            )}
            {GOOGLE_MAPS_API_KEY ? (
              <LoadScript 
                googleMapsApiKey={GOOGLE_MAPS_API_KEY}
                onLoad={() => setMapLoading(false)}
                onError={() => {
                  setMapLoading(false);
                  setMapError('Map failed to load. Please try again later.');
                }}
              >
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={center}
                  zoom={13}
                  onLoad={onMapLoad}
                  onUnmount={() => setMapLoading(false)}
                  options={mapOptions}
                >
                  {markerIcon && (
                    <Marker 
                      position={center}
                      icon={markerIcon}
                    />
                  )}
                </GoogleMap>
              </LoadScript>
            ) : (
              <div className="map-fallback">
                <img src={staticMapUrl} alt="Map location" style={{ width: '100%', borderRadius: '8px' }} />
                <div className="error-message">
                  Map is unavailable without an API key. Please contact me via the form or email.
                </div>
              </div>
            )}
            {mapError && (
              <div className="map-fallback">
                <img src={staticMapUrl} alt="Map location fallback" style={{ width: '100%', borderRadius: '8px' }} />
              </div>
            )}
          </div>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          {status.submitted && (
            <div className="success-message">
              Thank you for your message! I'll get back to you soon.
            </div>
          )}
          
          {status.error && (
            <div className="error-message">
              {status.error}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              disabled={status.submitting}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
              disabled={status.submitting}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
              disabled={status.submitting}
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Message subject"
              required
              disabled={status.submitting}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              required
              disabled={status.submitting}
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="submit-btn"
            disabled={status.submitting}
          >
            {status.submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact; 