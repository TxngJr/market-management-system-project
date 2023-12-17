import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function EditSvgIcon() {
  return (
    <Svg
      width={49}
      height={47}
      viewBox="0 0 49 47"
      fill="none"
    >
      <Path fill="url(#pattern0)" d="M0 0H49V47H0z" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use
            xlinkHref="#image0_6_71"
            transform="matrix(.00195 0 0 .00204 0 -.021)"
          />
        </Pattern>
        <Image
          id="image0_6_71"
          width={512}
          height={512}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAgAElEQVR4Ae2dC7A0Z1Wu34SQEAiREMAkJASOxkQiCgioIIKlyDkqEURKRIIot0ChKAajci0PNyEHuR6MggmCIUbkYkQRjSiWBXgieo7hKBgwCQSjohCBXMjN+jIzu/fsPXv29ExfvrXeZ6r++mfPTHd/63nfXmt93T09Eg8IQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEBiXwAGSjpB0rKQTJH2zpIdKur+kkyXdY/r+weMOk61DAAIQgAAEINCGQCnwx0v6LkmnSTpT0nsk/b2kqyXd3OLfDZIul3ShpLMknS7pkdNG4ZA2g+KzEIAABCAAAQh0S+BW04L8VEnnS/q3FgW+TTOw87PXS7pI0sslPULSHboNi7VBAAIQgAAEILCTwF0l/YykP5B01UAFf2cDsPPv0hD8laRXSHrAzgHzNwQgAAEIQAAC6xEoM+wnSLpAUim2OwtwbX9fOj06cNJ64bIUBCAAAQhAwJdAObz/6Ok5/OsCFP29mpCPSvrZ6cWFvmoSOQQgAAEIQGAfAuUK/DLbLxfu7VVUI77+RUmvkXTcPvHzNgQgAAEIQMCKwOGSniXpimSFf2ez8hVJvzm9eNFKYIKFAAQgAAEIbCdwO0kvlvSfyQv/zkbgJknvlvR122HwHAIQgAAEIOBAoHyFrlwwt7M4Ov1djgiUUwPlCAgPCEAAAhCAQGoCJ0p6n3nh39nklFMf5dqHcjMjHhCAAAQgAIFUBG4/ne1G+CrfzgI91N9/zvUBqTxPMBCAAATsCdxX0ieY9a90uuOa6QWR9qYBAAQgAAEIxCVQDmmXq/uvpfivVPy3H2l4l6Q7xpWekUMAAhCAgCuBO0n6PQp/68K/vQm4TNKDXA1E3BCAAAQgEI9AKVqfpvhvVPxnjUD5psBz4lmAEUMAAhCAgBuBU9b4+d1ZseP/vb8Webakg9zMRLwQgAAEIBCDwBOD/GBP1Eaj3Dzo0BhWYJQQgAAEIOBC4AwO+XdyyH+/5uRDko50MRVxQgACEIBAvQTKlf7/i+I/SPGfNQcXSzq2XkswMghAAAIQyE6gnJN+O8V/0OI/awI+JemY7AYjPghAAAIQqI/ArSS9jeI/SvGfNQHlSMAR9VmDEUEAAhCAQFYCFP+9r9afFeeh/i/XBNw2q9GICwIQgAAE6iFA8a+n+M+ajHLDJb4iWM8+wkggAAEIpCNA8a+v+M+agLPSuY2AIAABCECgCgJlhnke5/xHPec/K/Z7/c8dA6vYVRgEBCAAgTwEmPnXO/Pf3gyUn1p+YB7bEQkEIAABCIxJgOIfo/jPGoHL+RXBMXcXtg0BCEAgBwGKf6ziP2sC3pHDfkQBAQhAAAJjEKD4xyz+sybgaWOYhm1CAAIQgEBsAlzwF7v4lybgakknx7Yho4cABCAAgSEJMPOPX/xnRwH+QlL5rQYeEIAABCAAgaUEKP55iv+sCXjsUsV5EwIQgAAE7AlQ/PMV/9IEfEbSYfbuBgAEIAABCCwkQPHPWfxnRwFeulB1XoQABCAAAWsCXPCXu/iXJuBaSSdYu5zgIQABCEBgjgDFP3/xnx0FeOec8vwBAQhAAAK2BDjs71P8SxNwE18LtN3XCRwCEIDAFgGKv1fxnx0F+I0tB/AEAhCAAATsCFD8PYt/aQK+Iuludo4nYAhAAAIQEMXft/jPjgKcyX4AAQhAAAJeBCj+FP/SBHxJ0pFe1idaCEAAAr4EuNqf4j87AlD+f7bvrkDkEIAABHwIUPwnxb/8OM6HJb1N0oslnSHp6ZJOl/QCSb8q6UJJVyp/s/DXPvYnUghAAAKeBNyL/yck/ZKkB0k6uIUFTpR0mqQPSLoxaUNQYuQBAQhAAAIJCbgW/1Kw3y3p2zvS9FhJvyzpqmSNwIs64sNqNiBwiKRvkPRoSb8g6WxJfyDpzyVdJOmT00NS5cKN7edweA6PrjxwvaQrpn57i6RnSbrnBp5m0fEJuBb/cgi/5NM+HneQ9KrpV+m62vfGXE85OsJjQALlKtz7SXqOpAumxf0GCjuNTaUeuETS8yQdM+A+wqY2J+BY/Mvs/PGbo1tpDSdL+ptK99m2DUWpRzx6JFC60Z+aHpL6fBLTtDUZn499tKL8kMhrJR3V437Cqrsh4Fj8y5HSr+kG38prKUduX5cgn7985Yj54MoEyjmjn5f0sQQGoXjHLt5d6lca2KdIOmDlPYEPDknA8Xv+fyLp9kNC3rGtnwx+kWD5VgSPDggcKukx00P75Zxql4mXdcGzJg+U01flfCiPegg4zvzPk3TrCiQ4NXATUGrVYRUwDDuEu0h6WcIrRGsqOIylvgboYq4NqCZnOc78z5dUmp5aHs8IPOl7WC0QI43jOEmvkfTlwMJTWOsrrJE0Kd9QKfsBj/EIuM78ayr+M/VfH7QWlJsi8ViRwN0lvUnSdUHFjlRgGGv9Dcr/k3T4ivsOH+uWADP/bnluurZyYeBHA9aFD24auMPy5S5Sz2XGz7UNAXfwvhupdzkkgMpiZOZfmSDT4ZSvCJaf3O17n+ty/eVbPqV54bEHge+W9A/BRO3SIKwr1g49hl5P3WPf4eXuCTDz755pl2v8lYC14qQuAWRZV7kBytsDijlGAWCb3k1C+YrgnbPs+BXHwcy/YnGmQyvfkIl22+BT6sc67Ai/X9LnKP6hDmXRhIzbhLxh2F3UbmvM/ONI/opgtYOfB556q3TY5UcSsv4CFEVy3CKZmX85l3h0nBwdaqTM/EPJdcu3YyLVkPJTyPaP4yV9KFjnlrmgEFu8ZuWF9lmkewDM/LtnOsQay08JR8lh5Y6K1o/vlfTvgQSLYizGGScJdKHVx62zSPfBM/PvnulQa4x0c6DLhoJS43Z+QhK37/UqVF0UO9ax2DP3qnEnDzgmZv4BRds25K8PNKEsp+8sH+W3z28KJBRFZ3HRgUs9XJ5pmUm6DZqZf7c8x1hb+dGsfwlUW2r4XYXBdCrivCqQOBS4egocWizX4m2D7cU5N8TMP4+uka4DOCIP9uWRlO76rRT/MBeoUHCXF9za+PzV8t2Pd5cQoPgvgRPwrV8LVGcsftejzPzLvfxrS5qMB02yeODKgIm6hiFz2L8GFbodQ/lKeZT9+p7dhl7n2spP90YRhHGiVUQPlF/I5NGOADP/dryifPr0QPXmAVGgrjvOcsFfxITKmNEtkgduWHcHNV2OmX9e4csFsVH23QfnlUH6Ee7uF8aIUXYYxrk4uZX7oPNYjQAz/9U4Rf3UzwdqAO4bFfJ+4y6dzXWBhKCwLC4scInB5dL9dkjev4UAM//8RnhpoLrzdRnluKOkkpAoHjDAA8N44MKMiaTjmJj5dwy00tWdG6j2pPsdj3LF/3sDCUCBGqZAwblfzq+vNBnXMixm/rUo0f84/k+g+nN4/ziG3cIZgeBTlPotSvAdju8PD7ubh9oaM/9Qcm002EMkXROkBpW74R64UbSVLfxA7u/PaY8gO1+m5qR8A+AuleWCWobDzL8WJYYZx3cEyj9fHAbJMFu5raRPBYKfqQAQy3Az7RpZ2/+s6B4pjuK/B5jEL0e6APDiTDq8mOLP7B8PjOKBx2dKJB3FwmH/jkAGW80/BspB7wrGds/hniCp/LRhjbMjxoQumT3waUkH77lner7BzN9T94cEq0GvyCJTOQSZOckSG/rW6oGnZUkiHcXBzL8jkAFXE+3bZ08JyHjXkB9L8af5wQOjeOBvJJWCx2NCgJm/rxPuI6lcVV9ro75oXN8ZXa5y4d8VwaAvEoLXYu046DU55Xbv6Amkw/Ez8+8QZrBVlXvP/FnAOnTXYJx3DfenAkKneFDsM3ig/MgWjwkBZv7eTnhiwDr0r5JK4xL2cWtJlwUEnyH5E4N3E/PrYbNG9wNn5t8900hr/FpJ5YewouXEd0SCvGisTw4IPZpJGG+8Hbtvzc7hvP9WOmLmv4XC8slhksp1MH3vc32svxw9D/soXXek71v2ISDrjLnjRdbtzOiHDTvMeMz8O4QZcFXlCPT7ghb/koO+KSDzrSE/LjD4yAWAsXs2HeUQZ9nneEwIMPP3dkJ0/f8j+m8AfJgGIORhJxqIeA3EeyQd553v56Jn5j+Hw+6PDPr/XmTVTqT4U/zxQK8eKN9nLjfXenDkRNHD2KPP/NZpwM+TVOLmMeFQeKzDsaZlfjKymNzzP74Ba9oZGEvjp7+T9DJJpcnmMU8gw8yvrdfPp/hvmSCL/uWXO4/aiirYk/LbxZcm6MCW7Yg3Tn/VsNxYotxasuyE/INB1x44V9KrJf2cpO+TdHSwXDDkcLMk/2V5Z+d7FP/GYZn0/6MmrHjPyq0Ldxo1w98fkfSLkr5N0iHxZGHEEEhLIFPyXzVXUvwbO2fTv9y0KOzjNxI1ANdIeoOkk8KqwcAhkJtAtuS/SgNA8W88nU3/UnPu0IQX61k5/P+5BA1AucDqLRxyjWU+RmtHIFvyp/i3s3BG/UPf/a/88MgqJq75M+W308P/AlO7/YhPQyAcAa72DydZpwPOqv8PdEpp4JX9TPAGoHyt6k4DM2NzEIBAOwIZZ377TYo47N94JKv+/xD95j/l5gX7GbnW93+Hi/uaPYxnEKiUQNbkvywvUvwbM2bW/0lNmPGeFWE+H7QBKI0LN9KI5zlG7EUgc/LfqwGg+Dcez6z/P0u6TRNqvGf3D1r8y9f7Do2HmxFDwIpA5uRP8d/fytn1P31/BHV/4pkBG4ByxOLudWNldBCwJ5A9+S9qAJj5N7bPrn/5Ia+vasKN+ex1ARuAH4uJmlFDwIZA1qu9FxX92Wvc27+xt4P+L2jCjfvs/cEagA/yu+lxzcbILQhkn/nNCv72/5n5N9Z20P8ySbdtQo777PJgDQC/ohbXa4w8PwGH5L+98JfnFP/G1y76P6oJOe6z0sGUu+ftNHStf/9FXNSMHALpCbgk/+35keLf2NpF/3LfmRSPaHcAfEIK6gQBgXwEXJI/xX+xd130v17SNyxGEO/VRwea/V8t6bB4iBkxBNITcEn+FP/FVnbS/8zFCGK++uRADUC5WJEHBCBQFwGn5D9rADjs33jQSf9PSLp9E3r8Zz8dqAF4bnzcRACBVASckj/Ff7d1nfS/VlI5ZZ7q8fxADcAjUpEnGAjEJuCU/Cn+u73qpv8zdiOI/8orAjUAJ8XHTQQQSEHALfmXBoDD/o113fS/IOu9Z94YqAG4Y+M/nkEAAiMRcEv+FP95o7npX+6Tc+Q8gjx/vTVQA3BwHuxEAoGQBBxu7zo73D/7n9v7NlZ10//Lkr6lCT/fs98O1ADko09EEIhDwG3mx8x/3ptu+t8gKcXd/uZlnP+LBmCeB39BAAK7Cbglf4r/vAfc9C93x33SPIKcf9EA5NSVqCDQFQG35E/xn3eOo/6/OI8g7180AHm1JTIIbErAMflztX/jGkf9y4XxNg8aABupCRQCrQi4XfBVZv5c8NdYxFH/t0s6sEGQ/xkNQH6NiRACbQk4zvyY+TcuQf+GRepnNACp5SU4CLQmQPJvjSzVAuifSs7lwdAALOfDuxBwIkDyd1J7d6zov5tJ6ldoAFLLS3AQWJkAyX9lVCk/iP4pZV0eFA3Acj68CwEHAiR/B5X3jhH992aT+h0agNTyEhwE9iVA8t8XUeoPoH9qeZcHRwOwnA/vQiAzAZJ/ZnX3jw3992eU+hM0AKnlJTgI7EmA5L8nGos30N9C5uVB0gAs58O7EMhIgOSfUdXVY0L/1Vml/iQNQGp5CQ4CuwiQ/HchsXoB/a3kXh4sDcByPrwLgUwESP6Z1GwfC/q3Z5Z6CRqA1PISHAS2CJD8t1BYPkF/S9mXB00DsJwP70IgAwGSfwYV148B/ddnl3pJGoDU8hIcBETy9zYB+nvrvzR6GoCleHgTAqEJkPxDy7fx4NF/Y4S5V0ADkFtfovMlQPL31b5Ejv7e+q8UPQ3ASpj4EARCESD5h5Kr88Gif+dIc66QBiCnrkTlS4Dk76t9iRz9vfVvFT0NQCtcfBgCVRMg+VctT++DQ//eEefaAA1ALj2JxpcAyd9X+xI5+nvrv1b0NABrYWMhCFRFgORflRyDDwb9B0eeY4M0ADl0JApfAiR/X+1L5Ojvrf9G0dMAbISPhSEwKgGS/6j4R984+o8uQewB0ADE1o/R+xIg+ftqXyJHf2/9O4meBqATjKwEAoMSIPkPiru6jaF/dZLEHBANQEzdGLUvAZK/r/YlcvT31r/T6GkAOsXJyiDQKwGSf694q185+lcvUawB0gDE0ovR+hIg+ftqXyJHf2/9e4meBqAXrKwUAp0SIPl3ijPcytA/nGQxBkwDEEMnRulLgOTvq32JHP299e81ehqAXvGycghsRIDkvxG+8Aujf3gJ6w6ABqBufRidLwGSv6/2JXL099Z/kOhpAAbBzEYg0IoAyb8VrnQfRv90ktYZEA1AnbowKl8CJH9f7Uvk6O+t/6DR0wAMipuNQWApAZL/Ujzp30T/9BLXFSANQF16MBpfAiR/X+1L5Ojvrf8o0dMAjIKdjUJgjgDJfw6H3R/obyd5HQHTANShA6PwJUDy99W+RI7+3vqPGj0NwKj42bg5AZK/twHQ31v/0aOnARhdAgZgSoDkbyr8NGz099a/iuhpAKqQgUGYESD5mwm+I1z03wGEP8chQAMwDne26kuA5O+rfYkc/b31ryp6GoCq5GAwyQmQ/JMLvE946L8PIN4elgANwLC82ZovAZK/r/YlcvT31r/K6GkAqpSFQSUjQPJPJmjLcNC/JTA+PgwBGoBhOLMVXwIkf1/tS+To761/1dHTAFQtD4MLToDkH1zADYeP/hsCZPF+CdAA9MuXtfsSIPn7al8iR39v/UNETwMQQiYGGYwAyT+YYB0PF/07Bsrq+iFAA9APV9bqS4Dk76t9iRz9vfUPFT0NQCi5GGzlBEj+lQvU8/DQv2fArL5bAjQA3fJkbb4ESP6+2pfI0d9b/5DR0wCElI1BV0aA5F+ZIAMPB/0HBs7muiFAA9ANR9biS4Dk76t9iRz9vfUPHT0NQGj5GPzIBEj+Iwsw8ubRf2QB2PxmBGgANuPH0r4ESP6+2pfI0d9b/xTR0wCkkJEgBiZA8h8YeGWbQ//KBGE46xGgAViPG0v5EiD5+2pfIkd/b/1TRU8DkEpOgumZAMm/Z8CVrx79KxeI4bUjQAPQjhef9iVA8vfVvkSO/t76p4yeBiClrATVMQGSf8dAg60O/YMJxnBXI0ADsBonPuVLgOTvq32JHP299U8dPQ1AankJbkMCJP8NAQZfHP2DC8jwlxOgAVjOh3d9CZD8fbUvkaO/t/4W0dMAWMhMkC0JkPxbAkv2cfRPJijhLCZAA7CYC6/6EiD5+2pfIkd/b/2toqcBsJKbYPchQPLfB1Dyt9E/ucCEN0+ABmCeB3/5EiD5+2pfIkd/b/0to6cBsJSdoHcQIPnvAGL2J/qbCU64EwI0ADjBnQDJ39sB6O+tv3X0NADW8tsHT/L3tgD6e+tvHz0NgL0FbAGQ/G2lvyVw9PfWn+gl0QBgA0cCJH9H1ZuY0b9hwTNjAjQAxuKbhk7yNxV+Gjb6e+tP9NsI0ABsg8HT9ARI/uklXhog+i/Fw5tuBGgA3BT3jZfk76t9iRz9vfUn+gUEaAAWQOGldARI/ukkbRUQ+rfCxYddCNAAuCjtGyfJ31f7Ejn6e+tP9EsI0AAsgcNb4QmQ/MNLuFEA6L8RPhbOToAGILvCvvGR/H21L5Gjv7f+RL8CARqAFSDxkXAESP7hJOt0wOjfKU5WlpUADUBWZX3jIvn7al8iR39v/Ym+BQEagBaw+Gj1BEj+1UvU6wDRv1e8rDwbARqAbIr6xkPy99W+RI7+3voT/RoEaADWgMYi1REg+VcnyaADQv9BcbOxLARoALIo6RsHyd9X+xI5+nvrT/QbEKAB2AAei45OgOQ/ugSjDgD9R8XPxqMToAGIrqDv+En+vtqXyNHfW3+i74AADUAHEFnF4ARI/oMjr2qD6F+VHAwmKgEagKjK+Y6b5O+rfYkc/b31J/oOCdAAdAiTVfVOgOTfO+KqN4D+VcvD4KIRoAGIppjveEn+vtqXyNHfW3+i74EADUAPUFll5wRI/p0jDbVC9A8lF4ONQoAGIIpSvuMk+ftqXyJHf2/9ib5HAjQAPcJl1RsTIPlvjDD0CtA/tHwMvnYCNAC1K+Q7PpK/r/YlcvT31p/oByBAAzAAZDbRmgDJvzWyVAugfyo5CaZWAjQAtSrjOy6Sv6/2JXL099af6AckQAMwIGw2tS8Bkv++iFJ/AP1Ty0twtRGgAahNEd/xkPx9tS+Ro7+3/kQ/AgEagBGgs8ldBEj+u5BYvYD+VnITbC0EaABqUcJ3HCR/X+1L5OjvrT/Rj0iABmBE+Gya5G/uAYq/uQEIf1wCNADj8nfeOsnfWX1m/t7qE30VBGgAqpDBbhAUfzvJ5wJG/zkc/AGBcQjQAIzD3XmrJH9n9Zn5e6tP9FURoAGoSo70g6H4p5d4aYDovxQPb0JgWAI0AMPydt7aQZLOk3Sz0b8Sb4mbx4QD+uMECFREgAagIjGSD+UNRoW/NDnnU/y3HM3MfwsFTyBQDwEagHq0yDyS55sVf2b+jZs58tOw4BkEqiJAA1CVHCkH8xBJNxo1AMz8Gxsz829Y8AwC1RGgAahOklQDOlzSZ4yKPzP/xr7M/BsWPINAlQRoAKqUJc2gXmlU/Jn5N7Zl5t+w4BkEqiVAA1CtNOEHdqyk60waAGb+jV2Z+TcseAaBqgnQAFQtT+jBnWlS/Jn5NzZl5t+w4BkEqidAA1C9RCEHWGaBnzNoAJj5N/Zk5t+w4BkEQhCgAQghU7hBPsyg+DPzb2zJzL9hwTMIhCFAAxBGqlAD/d/JGwBm/o0dmfk3LHgGgVAEaABCyRVmsJ9M3AAw829syMy/YcEzCIQjQAMQTrLqB3wcxb96jboYIMW/C4qsAwIjEqABGBF+0k0/IWkDwMy/MSzFv2HBMwiEJUADEFa6agf+5oQNAMW/sRvFv2HBMwiEJkADEFq+Kgef7fw/xb+xGcW/YcEzCIQnQAMQXsKqAsh2/p/i39iL4t+w4Jl0pKTHSXq1pD+TVBr/q6dH/66XdIWkiyS9RdKzJN0TaPURoAGoT5PII8p0/p/i3ziR4t+wcH52yLTo/6mkG9Y41XeJpOdJOsYZYk2x0wDUpEb8sWQ5/0/xb7xI8W9YuD4r93p4mqTL1yj6Ny9Y5lpJr5V0lCvQWuKmAahFiRzjyHD+n+LfeJHi37BwfXZfSR9dUMQXFfa2r31e0lMkHeAKd+y4aQDGViDP9jOc/6f4N36k+DcsXJ89daBf9LxA0h1cIY8ZNw3AmPRzbfvUnmYJbWcV636e2/s2fuT2vg0Lx2cHSnrjwPvzxVwbMLzVaACGZ551i5HP/zPzb1zJzL9h4fisFP+3Dlz8Z017OYVYjiTyGIgADcBAoA02E/X8P8W/MSfFv2Hh+uyVIxX/WRPwMU4HDGc9GoDhWGfeUtTz/xT/xpUU/4aF67Pyvf5ZIR7z/3e5CjB03DQAQxPPub2I3/+n+DdepPg3LFyfHS/pC5U0AKX5KBcg8uiZAA1Az4BNVh/t/D8X/DXG5IK/hoXzszLrHnPWv3PbV3GfgP7tSAPQP2OHLUQ7/383B1FWiJGZ/wqQDD7y0MqK/6wZeIMB+1FDpAEYFX+KjUc7/19uR8pDovjjghmB91faAJQ7Bh49GyT/d0+ABqB7pm5rjHb+/01uAi2Il+K/AIrpS+VHem6qtAEoRwJeaKrLIGHTAAyCOfVGop3/Lzcscn5Q/J3V3x37Syou/qUB4Ijdbs06e4UGoDOUtisqO+jsnF2E/51vNMIFf7a76Z6B//8A+++99hw9b2xEgAZgI3z2C3P+P44FmPnH0Wqokd6l8sP/swnFM4cC4rYdGgA3xbuNl/P/3fLsa20U/77Ixl7vKQFm/6UJeFtszPWOngagXm0ijIzz//WrRPGvX6OxRvicIA3AR8YClH27NADZFe43Pr7/3y/fTddO8d+UYO7lXxekAbgytwzjRUcDMB776Fvm/H/dClL869anhtGdE6QB+HINsDKOgQYgo6rDxMT5/2E4r7MViv861PyWiZL/y30KePRAIIoByoUgPOoiwPn/uvSYjYbiPyPB//sRIP/vRyj5+xggucA9hsf5/x7hrrlqiv+a4EwXI/+bCj8LGwPMSPB/GwKc/29Da5jPUvyH4ZxpK+T/TGquEQsGWAMai4jz/3WZgOJflx5RRkP+j6JUT+PEAD2BTb5azv/XIzDFvx4too2E/B9NsY7HiwE6BmqyOs7/1yE0xb8OHaKOgvwfVbmOxo0BOgJptBrO/9chNsW/Dh0ij4L8H1m9DsaOATqAaLYKzv+PLzjFf3wNMoyA/J9BxQ1iwAAbwDNdlPP/4wpP8R+Xf6atk/8zqblGLBhgDWjmi3D+fzwDUPzHY59xy+T/jKq2iAkDtIDFR8X5//FMQPEfj33WLZP/syq7YlwYYEVQfOwWApz/H8cIFP9xuGffKvk/u8L7xIcB9gHE23MEOP8/h2OQPyj+g2C23Aj531L2JmgM0LDg2f4EOP+/P6MuP0Hx75Im69pJgPy/k4jZ3xjATPANwuX8/wbw1liU4r8GNBZpRYD83wpXvg9jgHya9hUR5//7Irt7vRT/3Ux4pXsC5P/umYZaIwYIJdeog+X8/0Z/ULUAABS5SURBVDD4Kf7DcGYrEvnf3AUYwNwALcLn/H8LWGt+lOK/JjgWW4sA+X8tbHkWwgB5tOwzEs7/90l3sm6Kf/+M2cI8AfL/PA+7vzCAneRrBcz5/7WwrbwQxX9lVHywQwLk/w5hRlwVBoio2vBj5vx/f8wp/v2xZc3LCZD/l/NJ/y4GSC9xJwFeIunmQP/KKYsIj4MknReIaxceKPGWuHmMT4D8P74Go44AA4yKP8TGOf/fj0yFa6T9j+Lfjw/GXGsk/43JKe22MUBaaTsLjPP/3aA8WtJjJJ0l6WNms/7SPJzPzL8bI3W4FvJ/hzAjrgoDRFRt2DFz/n893u4Ff/sRA4r/eh7qeynyf9+EK18/BqhcoAqGx/f/VxOBgr/4OhGK/2r+GeNT5P8xqFe0TQxQkRgVDiXa+f/SrAz1KGxOlVSOkES7SHL77LzP51zwN5Qb19sO+X89bmmWwgBppOwlEM7/N1iZ4S+e4e/VQDDzb7xT6zPyf63KDDQuDDAQ6KCbcT7/T8FvV/C3NwIU/xg7PPk/hk69jRID9IY2xYqdzv9T8Ncv+BT/mLs7+T+mbp2NGgN0hjLdiqKd/y/n4ds8KPjdFHyKfxvX1fVZ8n9degw+GgwwOPIwG8x2/p+C333Bp/iH2Z0XDpT8vxCLz4sYwEfrtpFGP/9Pwe+34FP82+5R9X2e/F+fJoOOCAMMijvUxqJ9te2BfC1vlN9r4Kt+oXbrucGS/+dw+P2BAfw0XyXiaOf/t89Gec7MfxWP85lYv0WBXj0QoAHoAWqCVUY7/0/RH67oz1jzVb/4Ozr5P76GG0WAATbCl3bhaOf/Z0WJ/4dpBCj+OXZ98n8OHdeOAgOsjS71gtG+/0/hH6bwF84U/zy7Pvk/j5ZrRYIB1sKWeiHO/w9XTKM1LhT/XLs++T+Xnq2jwQCtkaVfgPP/NACLGhOKf75dn/yfT9NWEWGAVrgsPsz5fxqAnQ0AxT/nrk/+z6nrylFhgJVR2Xww2vf/dxYr/u62geF7/nl3ffJ/Xm1XigwDrITJ5kOc/++2eEZvRij+uXd98n9uffeNDgPsi8jqA5z/pwGYNS0c9s+/65P/82u8NEIMsBSP3Zuc/6cBKA0Axd9j1yf/e+i8Z5QYYE80lm/w/X8aAIq/z65P/vfRemGkGGAhFssXOf9P8af4e+365H8vvXdFiwF2IbF9gfP/3g0Axd9v1yf/+2k+FzEGmMNh/Qfn/30bAIq/565P/vfUfStqDLCFwv4J5/89GwCKv++uT/731f6WyDGAuQGm4XP+n+LPnuBHgPzvp/lcxBhgDoftH5z/92sAmPnb7u5bgZP/t1B4PsEAnrrvjJrz/14NAMV/5x7g+Tf531P3ragxwBYK6yec//dpACj+1rv6XPDk/zkcfn9gAD/Nd0bM+X+K/05P8LcHAfK/h857RokB9kRj8wbn/z0aAGb+Nrv0yoGS/1dGlfODGCCnrm2i4vx//gaA4t9mj/D5LPnfR+uFkWKAhVisXrxE+Qvg7BfuHP8/W9JBVo4m2FUJkP9XJZX0cxggqbArhnUMxV9Zm4IbJT1f0gEreoGP+REg//tpPhcxBpjDYffHKTQAKRuAT0t6uJ2bCbgtAfJ/W2LJPo8BkgnaMpzTaQBSNQDXSHqVpMNb+oCPexIg/3vqvhU1BthCYfnkdTQAKRqAf5N0pqRjLV1M0OsSIP+vSy7JchggiZBrhnEODUDYBqBcvHmWpEdIOmRN/VnMmwD531t/YQBvA5xLAxCmASgFv3xl81RJ5eZNPCCwKQHy/6YEgy+PAYILuOHw30QDUG0D8FlJ5fv7T5V09w11ZnEILCJA/l9Exeg1DGAk9oJQX0kDUE0DwAx/gUF5qVcC5P9e8da/cgxQv0Z9jvA0GoDRGgBm+H06m3WvQoD8vwqlxJ/BAInFXSG076ABGKwBYIa/giH5yKAEyP+D4q5vYxigPk2GHNGhkq6lCeilCaDgD+lktrUOAfL/OtQSLYMBEom5ZigX0gB00gBQ8Nc0IIuNRoD8Pxr6OjaMAerQYcxRlKvMs94Pv8+4OIc/pmvZdhcEyP9dUAy8DgwQWLyOhn6EpC/RBOzbBDHD78hwrKYaAuT/aqQYZyAYYBzutW31tTQAuxoAZvi1uZTxdE2A/N810WDrwwDBBOtpuOUe8u5HAZjh92QuVlstAfJ/tdIMMzAMMAznCFspvx3f5znz2tZNwY/gSsbYJwHyf590A6wbAwQQaaAh3lrSRxI3ARzSH8hIbCYMAfJ/GKn6GSgG6Idr1LWeKOmqJE0AM/yoLmTcQxEg/w9FutLtYIBKhRlxWA+VdF3AJoAZ/oimYdMhCZD/Q8rW3aAxQHcsM63phwI0AczwMzmOWMYgQP4fg3pF28QAFYlR2VAeLukLFR0JoOBXZhCGE54A+T+8hJsFgAE245d96RMk/e1ITQAFP7u7iG9sAuT/sRUYefsYYGQBAmy+fDvgeZKu7rkRoOAHMANDTEWA/J9KzvbBYID2zFyXOEbS6zu8YRAF39VJxF0LAfJ/LUqMNA4MMBL4wJv9KklPl/T+lj8lTMEPLDpDT0mA/J9S1tWDwgCrs+KTuwncTtKDJD1D0ssknSPpfEnnSnq1pJ+T9L2Sjtq9KK9AAAIjEyD/jyzA2JvHAGMrwPYhAAEIjEOA/D8O92q2igGqkYKBQAACEBiUAPl/UNz1bQwD1KcJI4IABCAwBAHy/xCUK94GBqhYHIYGAQhAoEcC5P8e4UZYNQaIoBJjhAAEINA9AfJ/90xDrREDhJKLwUIAAhDojAD5vzOUMVeEAWLqxqghAAEIbEqA/L8pweDLY4DgAjJ8CEAAAmsSIP+vCS7LYhggi5LEAQEIQKAdAfJ/O17pPo0B0klKQBCAAARWIkD+XwlT3g9hgLzaEhkEIACBZQTI/8voGLyHAQxEJkQIQAACCwiQ/xdAcXoJAzipTawQgAAEGgLk/4aF5TMMYCk7QUMAAhAQ+d/cBBjA3ACEDwEI2BIg/9tKPwkcA5gbgPAhAAFbAuR/W+kngWMAcwMQPgQgYEuA/G8r/SRwDGBuAMKHAARsCZD/baWfBI4BzA1A+BCAgC0B8r+t9JPAMYC5AQgfAhCwJUD+t5V+EjgGMDcA4UMAArYEyP+20k8CxwDmBiB8CEDAlgD531b6SeAYwNwAhA8BCNgSIP/bSj8JHAOYG4DwIQABWwLkf1vpJ4FjAHMDED4EIGBLgPxvK/0kcAxgbgDChwAEbAmQ/22lnwSOAcwNQPgQgIAtAfK/rfSTwDGAuQEIHwIQsCVA/reVfhI4BjA3AOFDAAK2BMj/ttJPAscA5gYgfAhAwJYA+d9W+kngGMDcAIQPAQjYEiD/20o/CRwDmBuA8CEAAVsC5H9b6SeBYwBzAxA+BCBgS4D8byv9JHAMYG4AwocABGwJkP9tpZ8EjgHMDUD4EICALQHyv630k8AxgLkBCB8CELAlQP63lX4SOAYwNwDhQwACtgTI/7bSTwLHAOYGIHwIQMCWAPnfVvpJ4BjA3ACEDwEI2BIg/9tKPwkcA5gbgPAhAAFbAuR/W+kngWMAcwMQPgQgYEuA/G8r/SRwDGBuAMKHAARsCZD/baWfBI4BzA1A+BCAgC0B8r+t9JPAMYC5AQgfAhCwJUD+t5V+EjgGMDcA4UMAArYEyP+20k8CxwDmBiB8CEDAlgD531b6SeAYwNwAhA8BCNgSIP/bSj8JHAOYG4DwIQABWwLkf1vpJ4FjAHMDED4EIGBLgPxvK/0kcAxgbgDChwAEbAmQ/22lnwSOAcwNQPgQgIAtAfK/rfSTwDGAuQEIHwIQsCVA/reVfhI4BjA3AOFDAAK2BMj/ttJPAscA5gYgfAhAwJYA+d9W+kngGMDcAIQPAQjYEiD/20o/CRwDmBuA8CEAAVsC5H9b6SeBYwBzAxA+BCBgS4D8byv9JHAMYG4AwocABGwJkP9tpZ8EjgHMDUD4EICALQHyv630k8AxgLkBCB8CELAlQP63lX4SOAYwNwDhQwACtgTI/7bSTwLHAOYGIHwIQMCWAPnfVvpJ4BjA3ACEDwEI2BIg/9tKPwk8kgEOMNeK8CEAAQh0SeB8STcH+HdTl0GzrobA2QHEnxn0ts2weQYBCEAAAhsSeG+Q/P+lDeNk8T0IvDaIAUoTcNQeMfAyBCAAAQi0J/DBIPn/n9uHxhKrEHhpEAOUBuB+qwTEZyAAAQhAYCUClwbJ/x9fKRo+1JrALwQxQGkAfrR1dCwAAQhAAAKLCBwq6cYg+f+iRQHw2uYEnhnEAKUBeNXm4bIGCEAAAhCQ9OBAuf8DKNYPgScGMsHf9oOAtUIAAhCwI/DCQLn/PXbqDBTw/whkgvJVkP82EBc2AwEIQCAzgY8Gyv1vzizEmLF9TSATlNMALxgTFtuGAAQgkIDAycHy/hkJmFcZwq0kXRPIDJ+VdJsqSTIoCEAAAjEInBUo55eJ3w/EwBpzlBcHM8NpMTEzaghAAAKjEzhO0rXBcv7Xj04t8QDeGcwMV0o6IrEehAYBCECgLwJvD5bvr5d0cF8wWK/0smCGKIeEfhXhIAABCECgFYHvCZjrP9EqQj7cmsCpAU1RvhHwg60jZQEIQAACngS+WlK5pW6ZQEX6925PuYaL+m7BDDEz7+cl3Ws4TGwJAhCAQEgC5cLpKPf9n+X32f/PDkk82KAvCdoEXCHpHsFYM1wIQAACQxE4SFK067xmxb/8f5+hQDlv59eDNgDFIOWw1r2dxSN2CEAAAgsIlJ9Q//3Auf1zkg5cEBcvdUzgRwKbpDQBX+CagI4dweogAIHIBL5W0l8Hz+vviCxApLEfLalcWLf90EvE5+UGF3xFMJLzGCsEINAlgTJjfrKkqxLk82d0CYZ1LScQ7YZAezUo/yKpGIc7Bi7Xm3chAIFcBL5L0ocTFP5Zbj8xlzx1R1Pusz8Dn+H/coHgiySVQ2E8IAABCGQkcLikH5f0oWT5m19/Hdit5Zf2MpwGWNS8/J2k10h6vKQHSDpK0mED82VzEIAABNYlcIikO0kqP+TzKEnPl/SBgLf1XZSfF732s+uCYrn1CUT9rugiA/FariM66ImeeMDDAzdKuuv6ZYwl1yXwlGSHkUgYHgkDndEZD+TxwB+uW8BYbjMC5XzS1TQBqa6FIDHmSYxoiZYOHnjcZmWMpTchcC4NAA0AHsADeAAPjOCBcov3221SwFh2MwLlrnpZLwZ06J6JkVkiHsADUT3wPzcrXyzdBYH3jtD5RTUs4ybZ4gE8gAc298CXJN25iwLGOjYj8K00ABz+wwN4AA/ggQE98MrNyhZLd0mgfMeUrhYGeAAP4AE80LcHrpV0TJcFjHVtRuC7aQBogPAAHsADeGAAD7x+s3LF0n0Q+JMBhO+7s2T9zF7wAB7AA/V64IuSju2jgLHOzQickPhWkySEehMC2qANHvDxwOmblSmW7pPASzkKwCFAPIAH8AAe6MED5Vdob91nAWPdmxE4VNKnehCeDt+nw0drtMYDeGCnB8r9Zr5zs/LE0kMQeCQNAN0/HsADeAAPdOiB3xyieLGNbgi8s0Phd3aC/M3sAA/gATzg44F/lfTV3ZQm1jIEgSMk/RNNADMAPIAH8AAe2MAD5ed+Hz5E0WIb3RJ4gKTrNhCeDt+nw0drtMYDeGCRB17SbVlibUMSeA4NAN0/HsADeAAPrOGBD3HV/5DluvttHSDp3WsIv6gT5DVmCHgAD+ABDw/8u6Tjuy9JrHFoAkdK+keaAGYAeAAP4AE8sIIHviLpYUMXKrbXH4F7SPrsCsLT3Xt09+iMzngADyzyQPm+/xP7K0WseSwC3yTpCzQBzADwAB7AA3hgDw88e6wCxXb7J/AQSdfsIfyibpDXmCXgATyABzw88Mv9lyC2MDaBR0m6gSaAGQAewAN4AA9MPXCOpHLROA8DAqdIupqdn50fD+ABPGDvgbMlHWRQ9whxG4FyOoBrAjwO7XEIF53xAB5Y5IGXb6sJPDUjcLKkzzADsJ8BLEoMvEbBwAN5PVBOAz/drN4R7gICd5f0cZoAmgA8gAfwgIUHyi3if3hBLeAlUwLlZkEXsPNb7PzM6vLO6tAWbffzwKWSvsW0zhH2EgLlCtBn8QNCNAE0gngAD6T0wHsk3XFJDeAtCOh+kj5JAkiZAPabHfA+M0g8kM8D10s6g6/5Ud1XJVC6xN+lCaAJwAN4AA+E9kD5HZj7r5r4+RwEthN4hKRPkQBCJwBmdPlmdGiKpvt5oFzoV77id5vtCZ3nEGhL4FBJL5J0LY0AjQAewAN4oHoPXCjppLaJns9DYBmBEyX9MTt/9Tv/fjMD3mf2iAdyeuAySeVW7zwg0BuBb+crgzQBNIJ4AA9U44Hy1b7yDa5ytJYHBAYhcB9J50sqvx/NjAIGeAAP4IFhPVC+rVUK/yGDZHw2AoEFBO4t6bf4cSGaIBpBPIAHevdAmXD9paTHSrrVgnzMSxAYhcDhkp4wvU6AowLDzgSYecEbD+T2wOXTq/pPGCW7s1EItCBwvKTnSfq/nCLofUZA4s+d+NHXV98rJZ0lqVx3Ve7UygMC4QjcWdJjJL1G0kUcIqQhwAN4AA8s9MAXp0dQy137vpmiH67WMeAVCBwn6UclvUTS70yPEnCPAd9ZDjNctHfzwI2S/knS+6YTo/KzvKXgH7hC/uQjEEhHoBj/HpL+u6THSzpteu/q0iSUIwdvnn7joHzrgH8wwAN4oGYPvFXSG6fn7J87vVL/SZIeKekbuTtfuvpFQBCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIACBnAT+C6vrfTL+HRXMAAAAAElFTkSuQmCC"
        />
      </Defs>
    </Svg>
  )
}

export default EditSvgIcon
